from elasticsearch import Elasticsearch
from config import ELASTICSEARCH_URL, ELASTICSEARCH_API_KEY, INDEX_NAME

es = Elasticsearch(
    [ELASTICSEARCH_URL],
    api_key=ELASTICSEARCH_API_KEY
)

def create_index():
    if not es.indices.exists(index=INDEX_NAME):
        es.indices.create(
            index=INDEX_NAME,
            body={
                "mappings": {
                    "properties": {
                        "text": {"type": "text"}
                    }
                }
            }
        )

def index_document(doc_id: str, document: dict):
    create_index()
    es.index(index=INDEX_NAME, id=doc_id, body=document)

def search_documents(query: str):
    response = es.search(
        index=INDEX_NAME,
        body={
            "query": {
                "match": {
                    "text": query
                }
            }
        }
    )
    return response["hits"]["hits"]