from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime
import uuid

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: uuid.UUID
    role: str
    avatar_url: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

# Token Schema
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

# News Schemas
class NewsBase(BaseModel):
    title: str
    description: Optional[str] = None
    content: Optional[str] = None
    author: Optional[str] = None
    category: str = "General AI"
    source_url: str
    image_url: Optional[str] = None
    importance_score: int = 50
    importance_level: str = "medium"

class NewsResponse(NewsBase):
    id: uuid.UUID
    published_at: datetime
    is_duplicate: bool = False

    class Config:
        from_attributes = True

# RAG Query Schemas
class RAGQueryRequest(BaseModel):
    query: str
    top_k: int = 5

class RAGQueryResponse(BaseModel):
    query: str
    answer: str
    sources: List[Dict[str, Any]]
