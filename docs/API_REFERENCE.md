API Reference
POST /upload
Upload a PDF file for indexing.

Content-Type: multipart/form-data
Body: { file: <PDF file> }
Response: { "message": "File uploaded and indexed" }

POST /query
Query indexed papers.

Content-Type: application/json
Body: { "query": "<user query>" }
Response: { "response": "<LLM-generated response>" }

