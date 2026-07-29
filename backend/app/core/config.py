from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "InsightFlow AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Database & Cache (Defaults to SQLite for instant local dev fallback)
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432
    POSTGRES_DB: str = "insightflow_db"
    DATABASE_URL: Optional[str] = "sqlite+aiosqlite:///./insightflow.db"
    REDIS_URL: str = "redis://localhost:6379/0"

    # JWT Security
    SECRET_KEY: str = "super_secret_jwt_key_insightflow_ai_2026_change_in_prod"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    # External AI APIs
    GEMINI_API_KEY: str = ""
    OPENAI_API_KEY: str = ""
    PINECONE_API_KEY: str = ""
    PINECONE_ENV: str = "us-east-1"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    def get_database_url(self) -> str:
        return self.DATABASE_URL or "sqlite+aiosqlite:///./insightflow.db"

settings = Settings()
