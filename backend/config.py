from dotenv import load_dotenv
import os

load_dotenv()

ELASTICSEARCH_URL = os.getenv("ELASTICSEARCH_URL")
ELASTICSEARCH_API_KEY = os.getenv("ELASTICSEARCH_API_KEY")
HF_API_KEY = os.getenv("HF_API_KEY")
INDEX_NAME = "research_papers"