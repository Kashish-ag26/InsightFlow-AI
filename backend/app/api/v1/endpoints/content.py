from fastapi import APIRouter
from pydantic import BaseModel
from app.agents.content_generator import ContentGeneratorAgent

router = APIRouter()
generator = ContentGeneratorAgent()

class PostGenerateRequest(BaseModel):
    title: str
    platform: str = "linkedin"
    style: str = "professional"

@router.post("/generate")
async def generate_post(req: PostGenerateRequest):
    content = generator.generate_post(req.title, req.platform, req.style)
    return {"platform": req.platform, "style": req.style, "content": content}
