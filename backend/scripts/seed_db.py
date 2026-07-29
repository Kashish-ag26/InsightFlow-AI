import asyncio
import logging
from app.db.session import AsyncSessionLocal
from app.models import User, Source, Preference
from app.core.security import get_password_hash

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

INITIAL_SOURCES = [
    {"name": "Google News AI", "url": "https://news.google.com/rss/search?q=artificial+intelligence", "category": "General AI"},
    {"name": "TechCrunch AI", "url": "https://techcrunch.com/category/artificial-intelligence/feed/", "category": "Tech News"},
    {"name": "The Verge AI", "url": "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", "category": "Tech News"},
    {"name": "MIT Technology Review", "url": "https://www.technologyreview.com/topic/artificial-intelligence/feed/", "category": "Research & Policy"},
    {"name": "ArXiv AI", "url": "http://export.arxiv.org/rss/cs.AI", "category": "Research Papers"},
]

async def seed_data():
    logger.info("Seeding database with initial sources and admin user...")
    async with AsyncSessionLocal() as session:
        # Seed Admin User
        admin_user = User(
            name="Alex Mercer",
            email="alex@insightflow.ai",
            password_hash=get_password_hash("password123"),
            role="admin"
        )
        session.add(admin_user)

        # Seed Sources
        for source_data in INITIAL_SOURCES:
            source = Source(
                name=source_data["name"],
                url=source_data["url"],
                category=source_data["category"],
                is_active=True
            )
            session.add(source)

        await session.commit()
        logger.info("Database seeding completed successfully!")

if __name__ == "__main__":
    asyncio.run(seed_data())
