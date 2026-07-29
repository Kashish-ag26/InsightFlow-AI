from app.agents.duplicate_detector import DuplicateDetectionAgent
from app.agents.importance_ranker import ImportanceRankingAgent
from app.agents.content_generator import ContentGeneratorAgent
from app.agents.image_generator import ImageGeneratorAgent

def test_duplicate_detection():
    agent = DuplicateDetectionAgent()
    sample_articles = [
        {"title": "OpenAI Releases Swarm Agent Framework"},
        {"title": "OpenAI Releases Swarm Agent Framework"},
        {"title": "NVIDIA Ships B200 Superchips"}
    ]
    unique = agent.deduplicate(sample_articles)
    assert len(unique) == 2, f"Expected 2 unique articles, got {len(unique)}"
    print("[PASS] test_duplicate_detection passed")

def test_importance_ranking():
    agent = ImportanceRankingAgent()
    article = {"title": "OpenAI Announces Breakthrough Gemini Model"}
    ranked = agent.rank_article(article)
    assert ranked["importance_score"] >= 80
    assert ranked["importance_level"] == "high"
    print("[PASS] test_importance_ranking passed")

def test_content_generator():
    agent = ContentGeneratorAgent()
    post = agent.generate_post(title="New Agent Release", platform="linkedin")
    assert "LinkedIn" in post or "🚀" in post
    print("[PASS] test_content_generator passed")

def test_image_generator():
    agent = ImageGeneratorAgent()
    res = agent.generate_image_url(prompt="AI Bot", style="cyberpunk")
    assert "image_url" in res
    assert res["style"] == "cyberpunk"
    print("[PASS] test_image_generator passed")

if __name__ == "__main__":
    test_duplicate_detection()
    test_importance_ranking()
    test_content_generator()
    test_image_generator()
    print("\nAll 4 unit tests passed cleanly!")
