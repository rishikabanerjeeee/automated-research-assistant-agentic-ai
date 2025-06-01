import PyPDF2
from io import BytesIO

def extract_text_from_pdf(file_content: bytes) -> str:
    try:
        pdf_file = BytesIO(file_content)
        reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        return text
    except Exception as e:
        raise Exception(f"Error processing PDF: {str(e)}")