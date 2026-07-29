import logging
from typing import List, Dict, Any

logger = logging.getLogger(__name__)

class DuplicateDetectionAgent:
    """AI Duplicate Detection & Merging Agent"""

    def deduplicate(self, articles: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        unique_articles = []
        seen_titles = set()

        for article in articles:
            # Simple title normalization for duplicate matching
            normalized_title = article["title"].lower().strip()
            if normalized_title not in seen_titles:
                seen_titles.add(normalized_title)
                article["is_duplicate"] = False
                unique_articles.append(article)
            else:
                logger.info(f"Duplicate removed: {article['title']}")

        return unique_articles
