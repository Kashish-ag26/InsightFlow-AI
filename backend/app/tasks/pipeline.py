import asyncio
import logging
from app.tasks.celery_app import celery_app
from app.agents.news_collector import NewsCollectorAgent
from app.agents.duplicate_detector import DuplicateDetectionAgent
from app.agents.importance_ranker import ImportanceRankingAgent
from app.agents.research_agent import ResearchAgent
from app.agents.fact_verifier import FactVerificationAgent

logger = logging.getLogger(__name__)

async def execute_pipeline():
    logger.info("Executing Autonomous AI News Pipeline...")
    collector = NewsCollectorAgent()
    deduper = DuplicateDetectionAgent()
    ranker = ImportanceRankingAgent()
    researcher = ResearchAgent()
    verifier = FactVerificationAgent()

    # Step 1: Collect News
    raw_news = await collector.run_pipeline()
    
    # Step 2: Deduplicate
    unique_news = deduper.deduplicate(raw_news)
    
    # Step 3: Importance Ranking & Research
    processed_items = []
    for item in unique_news:
        ranked = ranker.rank_article(item)
        if ranked["importance_score"] >= 70:
            research_data = researcher.synthesize_research(ranked)
            verification = verifier.verify_claims(ranked)
            ranked["research"] = research_data
            ranked["verification"] = verification
        processed_items.append(ranked)

    logger.info(f"Pipeline completed successfully. Processed {len(processed_items)} items.")
    return processed_items

@celery_app.task(name="app.tasks.pipeline.run_autonomous_pipeline")
def run_autonomous_pipeline():
    return asyncio.run(execute_pipeline())
