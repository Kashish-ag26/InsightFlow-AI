import asyncio
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.router import api_router
from app.tasks.pipeline import execute_pipeline

logger = logging.getLogger(__name__)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    description="Autonomous AI News Intelligence & Content Automation Platform API"
)

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.on_event("startup")
async def start_periodic_harvesting():
    """Native background task that executes news harvesting every 2 hours (7200s)"""
    async def background_loop():
        logger.info("Native Autonomous News Harvester background loop active.")
        while True:
            try:
                logger.info("Executing 2-hour periodic autonomous news harvesting cycle...")
                await execute_pipeline()
            except Exception as e:
                logger.error(f"Error during periodic news harvesting: {e}")
            await asyncio.sleep(7200)  # 7200 seconds = 2 hours

    asyncio.create_task(background_loop())

@app.get("/")
async def root():
    return {
        "message": "Welcome to InsightFlow AI Core API",
        "docs": "/docs",
        "health": f"{settings.API_V1_STR}/health",
        "auto_harvest_interval": "Every 2 Hours (7200s)"
    }
