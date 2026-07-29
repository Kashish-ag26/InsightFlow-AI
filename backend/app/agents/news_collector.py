import feedparser
import httpx
import logging
from typing import List, Dict, Any
from datetime import datetime, timezone

logger = logging.getLogger(__name__)

MULTI_DOMAIN_FEEDS = [
    # Indian Politics & Protests (NDTV, Hindustan Times, Google News India)
    {"name": "NDTV India News", "url": "https://feeds.feedburner.com/ndtvnews-top-stories", "category": "Indian Politics"},
    {"name": "Hindustan Times National", "url": "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml", "category": "Indian Politics"},
    {"name": "Google News Indian Politics", "url": "https://news.google.com/rss/search?q=indian+politics+protests+elections&hl=en-IN&gl=IN&ceid=IN:en", "category": "Indian Politics"},

    # Tech & AI
    {"name": "Google News AI", "url": "https://news.google.com/rss/search?q=artificial+intelligence&hl=en-IN&gl=IN&ceid=IN:en", "category": "Tech & AI"},
    {"name": "TechCrunch", "url": "https://techcrunch.com/feed/", "category": "Tech & AI"},
    {"name": "The Verge AI", "url": "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", "category": "Tech & AI"},
    {"name": "MIT Technology Review", "url": "https://www.technologyreview.com/topic/artificial-intelligence/feed/", "category": "Tech & AI"},

    # War, Defense & Geopolitics
    {"name": "Google News Defense & War", "url": "https://news.google.com/rss/search?q=geopolitics+defense+war&hl=en-IN&gl=IN&ceid=IN:en", "category": "War & Defense"},
    {"name": "BBC World News", "url": "http://feeds.bbci.co.uk/news/world/rss.xml", "category": "War & Defense"},
    {"name": "Reuters World", "url": "https://www.reutersagency.com/feed/?best-topics=world&post_type=best", "category": "War & Defense"},

    # Stocks, Markets & Finance (India & Global)
    {"name": "Economic Times Markets", "url": "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms", "category": "Stocks & Finance"},
    {"name": "Hindustan Times Markets", "url": "https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml", "category": "Stocks & Finance"},
    {"name": "Moneycontrol News", "url": "https://www.moneycontrol.com/rss/MCtopnews.xml", "category": "Stocks & Finance"},

    # Sports (NDTV, ESPN, TOI)
    {"name": "NDTV Sports", "url": "https://feeds.feedburner.com/ndtvsports-trending-news", "category": "Sports"},
    {"name": "ESPN India", "url": "https://www.espn.com/espn/rss/news", "category": "Sports"},
    {"name": "Times of India Sports", "url": "https://timesofindia.indiatimes.com/rssfeeds/4719148.cms", "category": "Sports"},

    # Fashion & Lifestyle
    {"name": "Vogue Trends", "url": "https://www.vogue.com/feed/fashion/rss", "category": "Fashion & Lifestyle"},
    {"name": "Google News Fashion India", "url": "https://news.google.com/rss/search?q=fashion+lifestyle+trends+india&hl=en-IN&gl=IN&ceid=IN:en", "category": "Fashion & Lifestyle"},

    # Industry & Energy
    {"name": "Google News Industry & Energy", "url": "https://news.google.com/rss/search?q=renewable+energy+manufacturing+industry&hl=en-IN&gl=IN&ceid=IN:en", "category": "Industry & Energy"},
    {"name": "Economic Times Industry", "url": "https://economictimes.indiatimes.com/industry/rssfeeds/13352306.cms", "category": "Industry & Energy"},
]

class NewsCollectorAgent:
    """Multi-Domain Autonomous News Harvester Agent (15+ Items Per Category)"""

    def __init__(self):
        self.http_client = httpx.AsyncClient(timeout=10.0, follow_redirects=True)

    async def fetch_rss_feeds(self) -> List[Dict[str, Any]]:
        articles = []
        for feed_info in MULTI_DOMAIN_FEEDS:
            try:
                parsed = feedparser.parse(feed_info["url"])
                for entry in parsed.entries[:15]:  # Take top 15 per feed for 10+ items per category
                    pub_date = datetime.now(timezone.utc)
                    if hasattr(entry, "published_parsed") and entry.published_parsed:
                        pub_date = datetime(*entry.published_parsed[:6], tzinfo=timezone.utc)

                    articles.append({
                        "title": entry.title,
                        "description": getattr(entry, "summary", getattr(entry, "description", "")),
                        "content": getattr(entry, "summary", ""),
                        "author": getattr(entry, "author", feed_info["name"]),
                        "published_at": pub_date,
                        "category": feed_info["category"],
                        "source_url": entry.link,
                        "source_name": feed_info["name"],
                        "image_url": self._get_image_for_category(feed_info["category"]),
                    })
            except Exception as e:
                logger.error(f"Error fetching feed {feed_info['name']}: {e}")
        return articles

    def _get_image_for_category(self, category: str) -> str:
        images = {
            "Indian Politics": "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=600&q=80",
            "Tech & AI": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
            "War & Defense": "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=600&q=80",
            "Stocks & Finance": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
            "Sports": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80",
            "Fashion & Lifestyle": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
            "Industry & Energy": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
        }
        return images.get(category, images["Tech & AI"])

    async def run_pipeline(self) -> List[Dict[str, Any]]:
        logger.info("NewsCollectorAgent multi-domain cycle started.")
        articles = await self.fetch_rss_feeds()
        logger.info(f"Fetched {len(articles)} items across all domains.")
        return articles
