from fastapi import APIRouter, Query, Depends
from typing import List, Optional
from app.agents.news_collector import NewsCollectorAgent
from app.agents.duplicate_detector import DuplicateDetectionAgent
from app.agents.importance_ranker import ImportanceRankingAgent
from app.agents.web_search_agent import DeepWebSearchAgent

router = APIRouter()
collector = NewsCollectorAgent()
deduper = DuplicateDetectionAgent()
ranker = ImportanceRankingAgent()
searcher = DeepWebSearchAgent()

@router.get("/")
async def get_news_feed(category: Optional[str] = None):
    raw_news = await collector.fetch_rss_feeds()
    unique_news = deduper.deduplicate(raw_news)
    scored_news = [ranker.rank_article(item) for item in unique_news]
    
    # Sort by published_at descending so new items go on top
    scored_news.sort(key=lambda x: x.get("published_at"), reverse=True)
    
    if category and category.lower() != "all":
        scored_news = [item for item in scored_news if item.get("category", "").lower() == category.lower()]
        
    return {"total": len(scored_news), "items": scored_news}

@router.get("/web-search")
async def web_search(q: str = Query(..., description="Query string for deep web search")):
    results = await searcher.search_web(q)
    return {"query": q, "results": results}

@router.get("/archive")
async def get_historical_archive(limit: int = 50):
    raw_news = await collector.fetch_rss_feeds()
    unique_news = deduper.deduplicate(raw_news)
    scored_news = [ranker.rank_article(item) for item in unique_news]
    
    # Sort by published_at descending
    scored_news.sort(key=lambda x: x.get("published_at"), reverse=True)
    
    return {
        "archive_count": len(scored_news),
        "articles": scored_news[:limit]
    }

@router.post("/harvest")
async def trigger_harvest():
    raw = await collector.run_pipeline()
    unique = deduper.deduplicate(raw)
    scored = [ranker.rank_article(item) for item in unique]
    
    # Sort by published_at descending
    scored.sort(key=lambda x: x.get("published_at"), reverse=True)
    
    return {"status": "success", "harvested_count": len(scored), "items": scored}
