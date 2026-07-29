from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "InsightFlow AI Backend",
        "agent_pipeline": "active",
        "version": "1.0.0"
    }
