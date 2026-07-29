from fastapi import APIRouter
from app.schemas.schemas import RAGQueryRequest, RAGQueryResponse
from app.services.rag_service import RAGService

router = APIRouter()
rag_service = RAGService()

@router.post("/query", response_model=RAGQueryResponse)
async def query_knowledge_base(req: RAGQueryRequest):
    result = rag_service.query(req.query, req.top_k)
    return RAGQueryResponse(**result)
