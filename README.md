# InsightFlow AI — Autonomous AI News Intelligence & Content Platform

> **Tagline:** Autonomous AI News Intelligence & Content Automation Platform  
> **Built with:** Next.js 15, React 19, TypeScript, TailwindCSS, shadcn/ui, FastAPI, Python, Async SQLAlchemy, PostgreSQL, Celery, Redis, Google Gemini, Pinecone/ChromaDB.

---

## 🌟 Overview

InsightFlow is an autonomous, multi-agent AI SaaS platform designed for tech founders, VC analysts, research leads, and content creators. It automates the end-to-end lifecycle of technical intelligence:

1. **Multi-Source News Harvesting:** Collects news every 2 hours from Google News, TechCrunch, ArXiv, HuggingFace, Reddit AI, OpenAI, Anthropic, DeepMind, and GitHub.
2. **Duplicate Removal:** Cosine-similarity deduplication and semantic clustering via embeddings.
3. **Importance Scoring:** Multi-criteria 0–100 scoring (Innovation, Business Impact, Technical Complexity).
4. **Deep AI Research:** Gemini-powered technical synthesis, pros/cons, simple & business summaries.
5. **Pinecone RAG Knowledge Base:** High-dimensional vector indexing enabling natural language query answering.
6. **Analytics & Performance Tracking:** Track reach, engagement, CTR, and top sources in real-time.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js v20+ & npm
- Python 3.11+
- PostgreSQL & Redis (or Docker)

### 1. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
API Documentation will be live at: [http://localhost:8000/docs](http://localhost:8000/docs)

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Application will be live at: [http://localhost:3000](http://localhost:3000)

### 3. Docker Compose (Full Stack)
```bash
docker-compose up --build
```

---

## 📁 Repository Structure

```
InsightFlow AI/
├── frontend/                   # Next.js 15 App (React 19, Tailwind, shadcn)
│   ├── src/
│   │   ├── app/                # App Router Pages
│   │   ├── components/         # Layout, UI, Charts, Floating Chat
│   │   ├── lib/                # Utils & Axios API client
│   │   └── styles/             # Global CSS & Glassmorphism design system
├── backend/                    # FastAPI Backend (Async SQLAlchemy, Pydantic v2)
│   ├── app/
│   │   ├── api/v1/             # API Endpoints (Auth, Health, News, RAG)
│   │   ├── core/               # Security & Config Settings
│   │   ├── db/                 # Async Engine & Session Manager
│   │   ├── models/             # 10 SQLAlchemy ORM Models
│   │   └── schemas/            # Pydantic Schemas
├── docker-compose.yml          # Containerized dev/prod deployment
├── .env.example                # Environment Variable Template
└── README.md
```

---

## 🛡️ License
MIT License. Built for production scale and portfolio demonstration.
