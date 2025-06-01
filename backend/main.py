from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import requests
from langchain.prompts import PromptTemplate
from utils.document_processing import extract_text_from_pdf
from utils.elasticsearch_setup import index_document, search_documents
from config import HF_API_KEY

app = FastAPI()

def query_hf_model(prompt: str) -> str:
    headers = {"Authorization": f"Bearer {HF_API_KEY}"}
    response = requests.post(
        "https://api-inference.huggingface.co/models/distilbert-base-uncased",
        headers=headers,
        json={"inputs": prompt}
    )
    try:
        return response.json()[0]["generated_text"]
    except:
        return "Error: Unable to generate response from model"

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")
    content = await file.read()
    try:
        text = extract_text_from_pdf(content)
        doc_id = file.filename
        index_document(doc_id, {"text": text})
        return {"message": f"File {file.filename} uploaded and indexed"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

@app.post("/query")
async def query_papers(query: dict):
    query_text = query.get("query")
    if not query_text:
        raise HTTPException(status_code=400, detail="Query is required")
    results = search_documents(query_text)
    if not results:
        return {"response": "No relevant documents found"}
    
    context = "\n".join([hit["_source"]["text"][:500] for hit in results])
    prompt = PromptTemplate(
        input_variables=["context", "query"],
        template="Based on the context:\n{context}\n\nAnswer: {query}"
    ).format(context=context, query=query_text)
    response = query_hf_model(prompt)
    return {"response": response}