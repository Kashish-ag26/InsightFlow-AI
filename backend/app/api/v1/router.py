from fastapi import APIRouter
from app.api.v1.endpoints import health, auth, news, content, knowledge

api_router = APIRouter()
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(news.router, prefix="/news", tags=["News Pipeline"])
api_router.include_router(content.router, prefix="/content", tags=["Content Studio"])
api_router.include_router(knowledge.router, prefix="/knowledge", tags=["RAG Knowledge Base"])
