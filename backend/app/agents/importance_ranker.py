import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class ImportanceRankingAgent:
    """AI Importance Ranking Agent (0-100 Score)"""

    def rank_article(self, article: Dict[str, Any]) -> Dict[str, Any]:
        title = article.get("title", "").lower()
        score = 50  # Base score

        # Keyword heuristics for high importance
        high_impact_keywords = ["openai", "gemini", "nvidia", "breakthrough", "llama", "gpt-5", "claude 3.7", "quantum", "superchip"]
        medium_keywords = ["arxiv", "release", "benchmark", "robotics", "funding", "huggingface"]

        for kw in high_impact_keywords:
            if kw in title:
                score += 15

        for kw in medium_keywords:
            if kw in title:
                score += 8

        score = min(99, max(10, score))
        article["importance_score"] = score

        if score >= 85:
            article["importance_level"] = "high"
        elif score >= 60:
            article["importance_level"] = "medium"
        else:
            article["importance_level"] = "low"

        return article
