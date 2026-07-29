import uuid
from datetime import datetime, timezone
from sqlalchemy import String, DateTime, Integer, Float, Boolean, Text, JSON, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base

class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    avatar_url: Mapped[str | None] = mapped_column(String(512), nullable=True)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[str] = mapped_column(String(50), default="user")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Source(Base):
    __tablename__ = "sources"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    url: Mapped[str] = mapped_column(String(512), unique=True, nullable=False)
    type: Mapped[str] = mapped_column(String(50), default="rss")
    category: Mapped[str] = mapped_column(String(100), default="AI")
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    last_fetched_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)

class News(Base):
    __tablename__ = "news"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title: Mapped[str] = mapped_column(String(512), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    content: Mapped[str | None] = mapped_column(Text, nullable=True)
    author: Mapped[str | None] = mapped_column(String(255), nullable=True)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    category: Mapped[str] = mapped_column(String(100), default="General AI")
    image_url: Mapped[str | None] = mapped_column(String(512), nullable=True)
    source_url: Mapped[str] = mapped_column(String(512), unique=True, nullable=False)
    source_id: Mapped[uuid.UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("sources.id"), nullable=True)
    importance_score: Mapped[int] = mapped_column(Integer, default=50)
    importance_level: Mapped[str] = mapped_column(String(20), default="medium")
    is_duplicate: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Article(Base):
    __tablename__ = "articles"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    news_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("news.id"), nullable=False)
    simple_summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    technical_summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    business_summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    future_impact: Mapped[str | None] = mapped_column(Text, nullable=True)
    pros: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    cons: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    industries_affected: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    companies_involved: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    confidence_score: Mapped[int] = mapped_column(Integer, default=90)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Embedding(Base):
    __tablename__ = "embeddings"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    news_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("news.id"), nullable=False)
    vector_id: Mapped[str] = mapped_column(String(255), nullable=False)
    model_used: Mapped[str] = mapped_column(String(100), default="sentence-transformers")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class GeneratedPost(Base):
    __tablename__ = "generated_posts"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    news_id: Mapped[uuid.UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("news.id"), nullable=True)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    platform: Mapped[str] = mapped_column(String(50), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    style: Mapped[str] = mapped_column(String(50), default="professional")
    status: Mapped[str] = mapped_column(String(50), default="draft")
    image_url: Mapped[str | None] = mapped_column(String(512), nullable=True)
    scheduled_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    published_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Analytics(Base):
    __tablename__ = "analytics"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    post_id: Mapped[uuid.UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("generated_posts.id"), nullable=True)
    views: Mapped[int] = mapped_column(Integer, default=0)
    engagement: Mapped[float] = mapped_column(Float, default=0.0)
    reach: Mapped[int] = mapped_column(Integer, default=0)
    ctr: Mapped[float] = mapped_column(Float, default=0.0)
    platform: Mapped[str] = mapped_column(String(50), default="linkedin")
    date: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Notification(Base):
    __tablename__ = "notifications"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    type: Mapped[str] = mapped_column(String(50), default="info")
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    is_read: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Preference(Base):
    __tablename__ = "preferences"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    interests: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    notification_channels: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    theme: Mapped[str] = mapped_column(String(20), default="dark")

class ScheduledPost(Base):
    __tablename__ = "scheduled_posts"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    post_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("generated_posts.id"), nullable=False)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    platform: Mapped[str] = mapped_column(String(50), nullable=False)
    scheduled_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    status: Mapped[str] = mapped_column(String(50), default="pending")
    retry_count: Mapped[int] = mapped_column(Integer, default=0)
