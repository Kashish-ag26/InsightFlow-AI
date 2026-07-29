from celery import Celery
from app.core.config import settings

celery_app = Celery(
    "insightflow_tasks",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    beat_schedule={
        "run-news-collector-every-2-hours": {
            "task": "app.tasks.pipeline.run_autonomous_pipeline",
            "schedule": 7200.0,  # Every 2 hours (7200 seconds)
        },
    },
)
