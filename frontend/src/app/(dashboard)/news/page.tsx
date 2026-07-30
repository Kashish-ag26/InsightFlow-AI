"use client";

import React, { useState, useEffect } from "react";
import { Search, Sparkles, Bookmark, Share2, Archive, ExternalLink, ArrowUpDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DeepResearchModal } from "@/components/news/deep-research-modal";

const categories = [
  "All Sections",
  "Indian Politics",
  "Tech & AI",
  "War & Defense",
  "Stocks & Finance",
  "Sports",
  "Fashion & Lifestyle",
  "Industry & Energy",
];

const feedData = [
  // --- INDIAN POLITICS & PROTESTS (10 items) ---
  {
    id: "pol_1",
    title: "Farmers' Unions Renew Demands for Legal MSP Guarantee; Mass Rallies Scheduled Across Punjab & Haryana Border",
    source: "The Hindu",
    source_url: "https://www.thehindu.com/news/national/",
    date: "Live • 10m ago",
    category: "Indian Politics",
    importance: "High",
    isTopStory: true,
    summary: "Farmer delegations convene at Sambhu border urging parliamentary ratification of minimum support prices, debt relief, and pension schemes following multi-state union dialogue.",
    timeVal: 10,
    views: 48200
  },
  {
    id: "pol_2",
    title: "Monsoon Session: Parliament Debates Digital Personal Data Protection Amendments",
    source: "The Indian Express",
    source_url: "https://indianexpress.com/section/india/",
    date: "Live • 30m ago",
    category: "Indian Politics",
    importance: "High",
    isTopStory: false,
    summary: "Opposition members demand Joint Parliamentary Committee (JPC) review over compliance norms for tech companies.",
    timeVal: 30,
    views: 32100
  },
  {
    id: "pol_3",
    title: "Supreme Court Hears Landmark Delimitation & State Quotas Representation Bench",
    source: "NDTV India",
    source_url: "https://www.ndtv.com/india-news",
    date: "Live • 55m ago",
    category: "Indian Politics",
    importance: "Medium",
    isTopStory: false,
    summary: "A five-judge constitutional bench issues directive on state census data collation and local council reservation policies.",
    timeVal: 55,
    views: 19400
  },
  {
    id: "pol_4",
    title: "New Infrastructure Land Acquisition Bill Passed in Assembly Amid Demonstration Rallies",
    source: "Hindustan Times",
    source_url: "https://www.hindustantimes.com/india-news",
    date: "Live • 1h 20m ago",
    category: "Indian Politics",
    importance: "Medium",
    isTopStory: false,
    summary: "New provisions mandate local landholder consensus and comprehensive rehabilitation packages before highway project approvals.",
    timeVal: 80,
    views: 14200
  },
  {
    id: "pol_5",
    title: "National Trade Union Joint Action Committee Calls for Nationwide Labor Law Strike",
    source: "Deccan Herald",
    source_url: "https://www.deccanherald.com/india",
    date: "Live • 2h ago",
    category: "Indian Politics",
    importance: "High",
    isTopStory: false,
    summary: "Unions submit charter demanding minimum wage adjustments, gig worker social security, and strict occupational safety codes.",
    timeVal: 120,
    views: 28900
  },
  {
    id: "pol_6",
    title: "Election Commission Issues Directives for Smart Vetting of Candidate Declaration Portals",
    source: "Times of India",
    source_url: "https://timesofindia.indiatimes.com/india",
    date: "Live • 2h 40m ago",
    category: "Indian Politics",
    importance: "Low",
    isTopStory: false,
    summary: "Digital filing system streamlines real-time checking of assets, background statements, and financial liabilities.",
    timeVal: 160,
    views: 11500
  },
  {
    id: "pol_7",
    title: "State Municipal Ward Delimitation Challenged in High Court Bench Hearing",
    source: "The Hindu",
    source_url: "https://www.thehindu.com/news/national/",
    date: "Live • 3h 10m ago",
    category: "Indian Politics",
    importance: "Low",
    isTopStory: false,
    summary: "Petitions request redrawing of urban boundaries citing population distribution imbalances in recent municipality polls.",
    timeVal: 190,
    views: 9800
  },
  {
    id: "pol_8",
    title: "Cabinet Approves Special Assistance Development Grant for Coastal Irrigation Networks",
    source: "The Indian Express",
    source_url: "https://indianexpress.com/section/india/",
    date: "Live • 4h ago",
    category: "Indian Politics",
    importance: "Medium",
    isTopStory: false,
    summary: "Rs 5,400 crore allocated for smart canal gate automation to prevent saline ingress across flood-prone farming regions.",
    timeVal: 240,
    views: 18300
  },
  {
    id: "pol_9",
    title: "All-Party Meeting Discusses Interstate River Water Sharing Agreement Amendments",
    source: "NDTV India",
    source_url: "https://www.ndtv.com/india-news",
    date: "Live • 4h 30m ago",
    category: "Indian Politics",
    importance: "High",
    isTopStory: false,
    summary: "Tribunal setup debated to handle water release formulas during low-rainfall monsoon periods.",
    timeVal: 270,
    views: 31200
  },
  {
    id: "pol_10",
    title: "Niti Aayog Unveils Decentralized District Governance Ranking Index Results",
    source: "Hindustan Times",
    source_url: "https://www.hindustantimes.com/india-news",
    date: "Live • 5h ago",
    category: "Indian Politics",
    importance: "Medium",
    isTopStory: false,
    summary: "Districts graded based on public service digitization, clean water access, and school infra performance metrics.",
    timeVal: 300,
    views: 16700
  },

  // --- TECH & AI (10 items) ---
  {
    id: "t_1",
    title: "Anthropic Releases Claude 3.7 Sonnet featuring Native Hybrid Thought Tracing",
    source: "Anthropic Research",
    source_url: "https://www.anthropic.com/news",
    date: "Live • 15m ago",
    category: "Tech & AI",
    importance: "High",
    isTopStory: false,
    summary: "Claude 3.7 Sonnet introduces hybrid reasoning capabilities allowing dynamic switching between immediate execution and extended chain-of-thought verification.",
    timeVal: 15,
    views: 89400
  },
  {
    id: "t_2",
    title: "OpenAI Announces Enterprise Agent Swarm Framework for Autonomous Workflows",
    source: "OpenAI Blog",
    source_url: "https://openai.com/blog",
    date: "Live • 35m ago",
    category: "Tech & AI",
    importance: "High",
    isTopStory: false,
    summary: "Multi-agent framework enables native handoff of specialized sub-tasks across complex enterprise codebases and cloud infrastructure.",
    timeVal: 35,
    views: 64200
  },
  {
    id: "t_3",
    title: "NVIDIA Blackwell B200 Superchips Begin Global Mass Shipment to Cloud Providers",
    source: "NVIDIA Newsroom",
    source_url: "https://nvidianews.nvidia.com/",
    date: "Live • 50m ago",
    category: "Tech & AI",
    importance: "High",
    isTopStory: false,
    summary: "B200 architecture delivers 30x inference speedups for trillion-parameter LLM workloads.",
    timeVal: 50,
    views: 78100
  },
  {
    id: "t_4",
    title: "Google DeepMind AlphaFold 3.5 Predicts Complex Protein-RNA Biomolecular Assemblies",
    source: "Google DeepMind",
    source_url: "https://deepmind.google/discover/",
    date: "Live • 1h 10m ago",
    category: "Tech & AI",
    importance: "Medium",
    isTopStory: false,
    summary: "Breakthrough biological sequence modeling model accelerates global drug discovery timelines.",
    timeVal: 70,
    views: 42300
  },
  {
    id: "t_5",
    title: "Meta AI Open-Sources Llama 4 405B MoE Model with 1 Million Context Window",
    source: "Meta AI Research",
    source_url: "https://ai.meta.com/blog/",
    date: "Live • 1h 45m ago",
    category: "Tech & AI",
    importance: "High",
    isTopStory: false,
    summary: "Features 128 active mixture-of-experts sub-networks trained on 25 Trillion multimodal tokens.",
    timeVal: 105,
    views: 59800
  },
  {
    id: "t_6",
    title: "Microsoft Azure Quantum Computer Demonstrates Logical Qubit Fault-Tolerant Gate Operations",
    source: "TechCrunch",
    source_url: "https://techcrunch.com",
    date: "Live • 2h 10m ago",
    category: "Tech & AI",
    importance: "High",
    isTopStory: false,
    summary: "Maintains hardware fidelity levels exceeding 99.98% across multi-stage mathematical tasks.",
    timeVal: 130,
    views: 31400
  },
  {
    id: "t_7",
    title: "Mistral AI Releases Codestral 2.0 Trained on 80+ Coding Languages Separately",
    source: "Mistral Blog",
    source_url: "https://mistral.ai",
    date: "Live • 2h 50m ago",
    category: "Tech & AI",
    importance: "Medium",
    isTopStory: false,
    summary: "Compact 22B model beats commercial coding tools in Python, Rust, and C++ code completion benchmarks.",
    timeVal: 170,
    views: 28500
  },
  {
    id: "t_8",
    title: "Apple Announces Private Cloud Compute End-to-End Encryption Verification Portal",
    source: "Apple Newsroom",
    source_url: "https://apple.com/newsroom",
    date: "Live • 3h 30m ago",
    category: "Tech & AI",
    importance: "Medium",
    isTopStory: false,
    summary: "Allows independent security researchers to inspect source code images of operational cloud instances.",
    timeVal: 210,
    views: 36200
  },
  {
    id: "t_9",
    title: "Hugging Face Crosses 2 Million Open AI Models Hosted on Community Portal",
    source: "Hugging Face",
    source_url: "https://huggingface.co",
    date: "Live • 4h 10m ago",
    category: "Tech & AI",
    importance: "Low",
    isTopStory: false,
    summary: "Surpassing expectations, community uploads grow 120% year-on-year across generative domain tasks.",
    timeVal: 250,
    views: 19400
  },
  {
    id: "t_10",
    title: "Cohere Releases Command R+ Enterprise Search-Grounding Agent Upgrade",
    source: "Cohere Blog",
    source_url: "https://cohere.com",
    date: "Live • 4h 50m ago",
    category: "Tech & AI",
    importance: "Medium",
    isTopStory: false,
    summary: "Advanced citation engine reduces hallucination rates in multivariant legal and financial queries.",
    timeVal: 290,
    views: 22100
  },

  // --- WAR & DEFENSE (10 items) ---
  {
    id: "w_1",
    title: "Global Defense Summit Unveils AI Cyber Shield Countermeasures & Drone Interception",
    source: "Reuters Defense",
    source_url: "https://www.reuters.com/world/",
    date: "Live • 20m ago",
    category: "War & Defense",
    importance: "High",
    isTopStory: false,
    summary: "International security coalition mandates automated radar defense deployment to protect strategic maritime trade infrastructure.",
    timeVal: 20,
    views: 51000
  },
  {
    id: "w_2",
    title: "Naval Patrol Fleets Initiate Autonomous Satellite Telemetry Tracking Systems",
    source: "BBC World Defense",
    source_url: "https://www.bbc.com/news/world",
    date: "Live • 40m ago",
    category: "War & Defense",
    importance: "High",
    isTopStory: false,
    summary: "Next-gen radar intelligence monitors maritime trade routes with real-time anomaly detection.",
    timeVal: 40,
    views: 38200
  },
  {
    id: "w_3",
    title: "Defense Ministry Approves Next-Gen Electronic Warfare Countermeasure Integration Projects",
    source: "Reuters Defense",
    source_url: "https://reuters.com",
    date: "Live • 1h ago",
    category: "War & Defense",
    importance: "High",
    isTopStory: false,
    summary: "Contracts signed for localized anti-jamming telecommunication nodes across northern borders.",
    timeVal: 60,
    views: 44100
  },
  {
    id: "w_4",
    title: "Joint Military Exercise Simulates Multi-Domain Autonomous Threat Mitigation Scenarios",
    source: "BBC World Defense",
    source_url: "https://bbc.com",
    date: "Live • 1h 30m ago",
    category: "War & Defense",
    importance: "Medium",
    isTopStory: false,
    summary: "Unmanned terrestrial and aerial systems coordinate defensive sweeps in simulated urban settings.",
    timeVal: 90,
    views: 29500
  },
  {
    id: "w_5",
    title: "Coast Guard Integrates AI Surveillance Arrays for Real-Time Fishery Protection",
    source: "Reuters Defense",
    source_url: "https://reuters.com",
    date: "Live • 2h ago",
    category: "War & Defense",
    importance: "Low",
    isTopStory: false,
    summary: "Infrared thermal tracking models identify unregistered vessels crossing territorial exclusive zones.",
    timeVal: 120,
    views: 18200
  },
  {
    id: "w_6",
    title: "Air Force Tests Hypersonic Glide Body Integration Platforms in High-Altitude Run",
    source: "BBC World Defense",
    source_url: "https://bbc.com",
    date: "Live • 2h 30m ago",
    category: "War & Defense",
    importance: "High",
    isTopStory: false,
    summary: "Aerospace propulsion components maintain stability parameters above Mach 5 velocity benchmarks.",
    timeVal: 150,
    views: 49000
  },
  {
    id: "w_7",
    title: "Defense Procurement Panel Authorizes Domestic Smart Munitions Manufacturing Lines",
    source: "Reuters Defense",
    source_url: "https://reuters.com",
    date: "Live • 3h ago",
    category: "War & Defense",
    importance: "Medium",
    isTopStory: false,
    summary: "Rs 3,200 crore budget assigned to private sector manufacturing under technology transfer contracts.",
    timeVal: 180,
    views: 31000
  },
  {
    id: "w_8",
    title: "Cyber Security Agency Issues Alert Regarding Distributed Firmware Supply Chain Vulnerabilities",
    source: "BBC World Defense",
    source_url: "https://bbc.com",
    date: "Live • 3h 40m ago",
    category: "War & Defense",
    importance: "High",
    isTopStory: false,
    summary: "Patches released for satellite router chipsets used across international logistical support networks.",
    timeVal: 220,
    views: 39500
  },
  {
    id: "w_9",
    title: "Naval Architecture Institute Unveils Autonomous Sub-Surface Mine Countermeasure Vehicle",
    source: "Reuters Defense",
    source_url: "https://reuters.com",
    date: "Live • 4h 20m ago",
    category: "War & Defense",
    importance: "Medium",
    isTopStory: false,
    summary: "Acoustic detection software maps sea-floor obstructions up to depths of 300 meters dynamically.",
    timeVal: 260,
    views: 22400
  },
  {
    id: "w_10",
    title: "Border Security Upgrades Smart Fencing Array with Sensor Fusion Processing Chips",
    source: "BBC World Defense",
    source_url: "https://bbc.com",
    date: "Live • 5h ago",
    category: "War & Defense",
    importance: "Medium",
    isTopStory: false,
    summary: "Seismic and optical inputs processed locally to reduce environmental false alarm rates.",
    timeVal: 300,
    views: 27100
  },

  // --- STOCKS & FINANCE (10 items) ---
  {
    id: "s_1",
    title: "Sensex & Nifty Hit All-Time Highs as FII Inflows & Q1 Earnings Exceed Forecasts",
    source: "Economic Times India",
    source_url: "https://economictimes.indiatimes.com/markets",
    date: "Live • 25m ago",
    category: "Stocks & Finance",
    importance: "High",
    isTopStory: false,
    summary: "Indian stock markets rally over 720 points led by IT majors, private banking, and renewable energy sector stocks.",
    timeVal: 25,
    views: 74200
  },
  {
    id: "s_2",
    title: "Global Tech Stocks Rally Following Record Cloud Infrastructure Capital Spending Reports",
    source: "Moneycontrol",
    source_url: "https://www.moneycontrol.com",
    date: "Live • 45m ago",
    category: "Stocks & Finance",
    importance: "High",
    isTopStory: false,
    summary: "Indexes surge on AI hardware demand forecasts, pushing chip manufacturer market caps to record valuations.",
    timeVal: 45,
    views: 61000
  },
  {
    id: "s_3",
    title: "SEBI Issues New Framework for Real-Time Settlement of Institutional Trade Margins",
    source: "Economic Times India",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 1h 10m ago",
    category: "Stocks & Finance",
    importance: "High",
    isTopStory: false,
    summary: "T+0 settlement loop transitions to optional instant settlement to optimize market capital liquidity.",
    timeVal: 70,
    views: 48900
  },
  {
    id: "s_4",
    title: "Treasury Bond Yields Stabilize Following Moderate Consumer Inflation Index Reports",
    source: "Moneycontrol",
    source_url: "https://moneycontrol.com",
    date: "Live • 1h 50m ago",
    category: "Stocks & Finance",
    importance: "Medium",
    isTopStory: false,
    summary: "10-year yields hover near 4.12% as analysts forecast federal reserve interest rate maintenance.",
    timeVal: 110,
    views: 29400
  },
  {
    id: "s_5",
    title: "Major Retail Banking Corporation Announces Digital Blockchain Clearing Array Launch",
    source: "Economic Times India",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 2h 20m ago",
    category: "Stocks & Finance",
    importance: "Medium",
    isTopStory: false,
    summary: "Smart contract framework accelerates cross-border trade settlement processing times to under 30 seconds.",
    timeVal: 140,
    views: 35100
  },
  {
    id: "s_6",
    title: "Gold Futures Hit Record Highs on Global Asset Hedging & Currency Stabilization Actions",
    source: "Moneycontrol",
    source_url: "https://moneycontrol.com",
    date: "Live • 3h ago",
    category: "Stocks & Finance",
    importance: "High",
    isTopStory: false,
    summary: "International bullion buying accelerates as central banks diversify reserves amid trade discussions.",
    timeVal: 180,
    views: 53200
  },
  {
    id: "s_7",
    title: "Startup Venture Funding in India Rebounds 35% in Q1 Led by GenAI & Fintech",
    source: "Economic Times India",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 3h 40m ago",
    category: "Stocks & Finance",
    importance: "Medium",
    isTopStory: false,
    summary: "Early-stage deal counts exceed 140 investments representing over $1.8 Billion in total capital inflow.",
    timeVal: 220,
    views: 41800
  },
  {
    id: "s_8",
    title: "Automotive Manufacturers Report Record Sales Records Fueled by EV Adoption Trends",
    source: "Moneycontrol",
    source_url: "https://moneycontrol.com",
    date: "Live • 4.5h ago",
    category: "Stocks & Finance",
    importance: "Low",
    isTopStory: false,
    summary: "SUV and electric passenger vehicle segments record 14% year-on-year sales growth nationally.",
    timeVal: 270,
    views: 21900
  },
  {
    id: "s_9",
    title: "Global Supply Chain Congestion Index Eases as Container Shipping Rates Stabilize",
    source: "Economic Times India",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 5h ago",
    category: "Stocks & Finance",
    importance: "Medium",
    isTopStory: false,
    summary: "Port turnaround parameters return to pre-seasonal standards reducing logistical transit overhead by 18%.",
    timeVal: 300,
    views: 26400
  },
  {
    id: "s_10",
    title: "National Pension Fund Announces Expansion of Domestic Equity Allocation Limits",
    source: "Moneycontrol",
    source_url: "https://moneycontrol.com",
    date: "Live • 5.5h ago",
    category: "Stocks & Finance",
    importance: "High",
    isTopStory: false,
    summary: "Authorized equity ceiling raised to 15% allowing Rs 24,000 crore additional capital to enter markets.",
    timeVal: 330,
    views: 46200
  },

  // --- SPORTS (10 items) ---
  {
    id: "sp_1",
    title: "India Dominates T20 Series Opener with Record-Breaking Century in Final Overs",
    source: "ESPN India",
    source_url: "https://www.espncricinfo.com/",
    date: "Live • 30m ago",
    category: "Sports",
    importance: "High",
    isTopStory: false,
    summary: "A masterclass chase sets a national record for the highest run chase in international T20 cricket.",
    timeVal: 30,
    views: 92800
  },
  {
    id: "sp_2",
    title: "Grand Slam Championship Quarterfinals Highlight Historic Tiebreak Comeback",
    source: "Times of India Sports",
    source_url: "https://timesofindia.indiatimes.com/sports",
    date: "Live • 1h 10m ago",
    category: "Sports",
    importance: "Medium",
    isTopStory: false,
    summary: "Unseeded contender battles back from two sets down to secure a semifinal berth.",
    timeVal: 70,
    views: 39100
  },
  {
    id: "sp_3",
    title: "National Athletics Selection Meet Records Three New National Track Records",
    source: "ESPN India",
    source_url: "https://espncricinfo.com",
    date: "Live • 1h 40m ago",
    category: "Sports",
    importance: "High",
    isTopStory: false,
    summary: "Athletes secure qualification timings for the upcoming world track championships in 100m and 400m events.",
    timeVal: 100,
    views: 47200
  },
  {
    id: "sp_4",
    title: "World Chess Federation Announces Bid Locations for Next Candidates Tournament",
    source: "Times of India Sports",
    source_url: "https://timesofindia.indiatimes.com",
    date: "Live • 2h 10m ago",
    category: "Sports",
    importance: "Medium",
    isTopStory: false,
    summary: "Three global tech capitals submit proposals to host the prestigious candidates challenge cycle.",
    timeVal: 130,
    views: 28400
  },
  {
    id: "sp_5",
    title: "Hockey Federation Unveils Local Franchise League Expansion Team Locations",
    source: "ESPN India",
    source_url: "https://espncricinfo.com",
    date: "Live • 2.5h ago",
    category: "Sports",
    importance: "Low",
    isTopStory: false,
    summary: "New squads announced for Bengaluru and Pune, increasing league size to 10 active teams next season.",
    timeVal: 150,
    views: 19800
  },
  {
    id: "sp_6",
    title: "Grand Prix Committee Confirms Layout Amendments for Street Circuit Safety",
    source: "Times of India Sports",
    source_url: "https://timesofindia.indiatimes.com",
    date: "Live • 3h 10m ago",
    category: "Sports",
    importance: "Low",
    isTopStory: false,
    summary: "Run-off zones expanded at turns 4 and 9 following pilot driver feedback during simulator runs.",
    timeVal: 190,
    views: 24100
  },
  {
    id: "sp_7",
    title: "Badminton Open: Indian Contender Secures Finals Spot with straight-set Victory",
    source: "ESPN India",
    source_url: "https://espncricinfo.com",
    date: "Live • 3h 50m ago",
    category: "Sports",
    importance: "High",
    isTopStory: false,
    summary: "Defeats defending champion 21-18, 21-15 in a fast-paced semifinal match lasting 42 minutes.",
    timeVal: 230,
    views: 52100
  },
  {
    id: "sp_8",
    title: "Football League Transfers: Top Striker Agrees to Terms on Multi-Year Contract Extension",
    source: "Times of India Sports",
    source_url: "https://timesofindia.indiatimes.com",
    date: "Live • 4h 20m ago",
    category: "Sports",
    importance: "Medium",
    isTopStory: false,
    summary: "Four-year deal finalized ensuring alignment with club performance incentives through 2030.",
    timeVal: 260,
    views: 31400
  },
  {
    id: "sp_9",
    title: "National Swimming Academy Announces Annual Youth Talent Identification Roster",
    source: "ESPN India",
    source_url: "https://espncricinfo.com",
    date: "Live • 4h 50m ago",
    category: "Sports",
    importance: "Low",
    isTopStory: false,
    summary: "40 junior swimmers selected across state trials for comprehensive residential training scholarships.",
    timeVal: 290,
    views: 15900
  },
  {
    id: "sp_10",
    title: "Pro Kabaddi League Draft: Record Bids Logged for Premium Defensive Players",
    source: "Times of India Sports",
    source_url: "https://timesofindia.indiatimes.com",
    date: "Live • 5h 20m ago",
    category: "Sports",
    importance: "High",
    isTopStory: false,
    summary: "Aggregate franchise expenditure reaches record parameters on day 1 of player selection pools.",
    timeVal: 320,
    views: 48300
  },

  // --- FASHION & LIFESTYLE (10 items) ---
  {
    id: "f_1",
    title: "Global Fashion Week Highlights Sustainable Smart Fabrics & AI Couture Designs",
    source: "Vogue Fashion",
    source_url: "https://www.vogue.com/fashion",
    date: "Live • 50m ago",
    category: "Fashion & Lifestyle",
    importance: "Medium",
    isTopStory: false,
    summary: "Couture fashion houses introduce thermal-regulating smart textiles generated via precision 3D algorithms.",
    timeVal: 50,
    views: 34100
  },
  {
    id: "f_2",
    title: "Luxury Sustainable Heritage Brands Adopt Zero-Waste Algorithmic Weaving Techniques",
    source: "Vogue Fashion",
    source_url: "https://www.vogue.com",
    date: "Live • 1h 40m ago",
    category: "Fashion & Lifestyle",
    importance: "Medium",
    isTopStory: false,
    summary: "Automated precision weaving reduces material waste by 92% across luxury pret-a-porter lines.",
    timeVal: 100,
    views: 28400
  },
  {
    id: "f_3",
    title: "India Handloom Revival Collective Partners with International Luxury Distribution Networks",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 2h 10m ago",
    category: "Fashion & Lifestyle",
    importance: "High",
    isTopStory: false,
    summary: "Traditional weavers secure fair-trade contracts to supply organic textile blends globally.",
    timeVal: 130,
    views: 46100
  },
  {
    id: "f_4",
    title: "Eco-Conscious Footwear Brand Launches Biodegradable Plant-Fiber running Sole Roster",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 2.5h ago",
    category: "Fashion & Lifestyle",
    importance: "Low",
    isTopStory: false,
    summary: "Outer sole compounds breakdown entirely within 180 days in organic soil settings.",
    timeVal: 150,
    views: 19200
  },
  {
    id: "f_5",
    title: "Wearable Tech Accessories Integrate Biomarker Health Sensor Crystals in Jewelry",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 3h 10m ago",
    category: "Fashion & Lifestyle",
    importance: "Medium",
    isTopStory: false,
    summary: "Minimalist rings and pendants monitor heart-rate variability and stress indicators without display faces.",
    timeVal: 190,
    views: 31000
  },
  {
    id: "f_6",
    title: "Upcycled Denim Apparel Wins High Honors at International Design Showcase Meet",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 3h 40m ago",
    category: "Fashion & Lifestyle",
    importance: "Low",
    isTopStory: false,
    summary: "Collection utilizes post-industrial textile scrap reconstituted with non-chemical indigo dye extraction.",
    timeVal: 220,
    views: 17400
  },
  {
    id: "f_7",
    title: "Heritage Silk Weaving Center Establishes Digital Authentication Ledger Portal",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 4h 10m ago",
    category: "Fashion & Lifestyle",
    importance: "Medium",
    isTopStory: false,
    summary: "Unique QR tags provide secure traceability back to artisanal handloom centers across India.",
    timeVal: 250,
    views: 29800
  },
  {
    id: "f_8",
    title: "Sustainable Pigment Startup Extracts Non-Toxic Dyes from Organic Agriculture Residue",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 4h 40m ago",
    category: "Fashion & Lifestyle",
    importance: "High",
    isTopStory: false,
    summary: "Flower and food processing waste converted to industrial-grade dyes for major cotton mills.",
    timeVal: 280,
    views: 42100
  },
  {
    id: "f_9",
    title: "Luxury Skin-Care Brand Introduces Biodegradable Cellulose Packaging Arrays",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 5h 10m ago",
    category: "Fashion & Lifestyle",
    importance: "Low",
    isTopStory: false,
    summary: "Containers decompose in domestic compost loops, replacing single-use plastic caps entirely.",
    timeVal: 310,
    views: 18200
  },
  {
    id: "f_10",
    title: "Fashion Design Institute Establishes Digital Fabric Simulation Virtual Reality Desks",
    source: "Vogue Fashion",
    source_url: "https://vogue.com",
    date: "Live • 5h 40m ago",
    category: "Fashion & Lifestyle",
    importance: "Medium",
    isTopStory: false,
    summary: "Apprentice designers simulate draping and pattern fits virtually before physical sample runs.",
    timeVal: 340,
    views: 25400
  },

  // --- INDUSTRY & ENERGY (10 items) ---
  {
    id: "i_1",
    title: "Green Hydrogen Gigafactory Initiates Operations Supplying Industrial Corridors",
    source: "Economic Times Energy",
    source_url: "https://economictimes.indiatimes.com/industry/energy",
    date: "Live • 40m ago",
    category: "Industry & Energy",
    importance: "High",
    isTopStory: false,
    summary: "Clean energy project delivers 500MW capacity to power manufacturing plants with zero carbon footprint.",
    timeVal: 40,
    views: 48900
  },
  {
    id: "i_2",
    title: "Robotic Automation Plants Achieve 40% Productivity Gains in EV Manufacturing",
    source: "Bloomberg Industry",
    source_url: "https://www.bloomberg.com/industry",
    date: "Live • 1h 20m ago",
    category: "Industry & Energy",
    importance: "Medium",
    isTopStory: false,
    summary: "Fully automated assembly lines set production speed records for electric vehicle battery pack integration.",
    timeVal: 80,
    views: 31200
  },
  {
    id: "i_3",
    title: "Semiconductor Fabrication Unit Project Breaks Ground in Gujarat Tech Zone",
    source: "Economic Times Industry",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 1h 50m ago",
    category: "Industry & Energy",
    importance: "High",
    isTopStory: false,
    summary: "Joint venture secures clearance for Rs 12,000 crore wafer manufacturing facility targeting auto chips.",
    timeVal: 110,
    views: 64200
  },
  {
    id: "i_4",
    title: "Smart Grid Integration Complete Across major Industrial Corridor Hubs",
    source: "Bloomberg Industry",
    source_url: "https://bloomberg.com",
    date: "Live • 2h 20m ago",
    category: "Industry & Energy",
    importance: "Medium",
    isTopStory: false,
    summary: "Dynamic load balancing algorithms reduce grid transit losses by 14% during peak operational shifts.",
    timeVal: 140,
    views: 27800
  },
  {
    id: "i_5",
    title: "Deepwater Gas Extraction Project Achieves Commercial Stream Flow Parameters",
    source: "Economic Times Industry",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 2h 50m ago",
    category: "Industry & Energy",
    importance: "Low",
    isTopStory: false,
    summary: "Offshore platform reaches daily output metrics of 12 Million standard cubic meters.",
    timeVal: 170,
    views: 18900
  },
  {
    id: "i_6",
    title: "Aluminum Smelter Retrofit Project Reduces Greenhouse Gas Metrics by 22%",
    source: "Bloomberg Industry",
    source_url: "https://bloomberg.com",
    date: "Live • 3h 20m ago",
    category: "Industry & Energy",
    importance: "Medium",
    isTopStory: false,
    summary: "Anode upgrades and waste heat capture arrays installed across three smelting lines.",
    timeVal: 200,
    views: 23400
  },
  {
    id: "i_7",
    title: "National Solar Mission Approves Funding for 4GW Ultra-Mega Park Roster",
    source: "Economic Times Industry",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 3h 50m ago",
    category: "Industry & Energy",
    importance: "High",
    isTopStory: false,
    summary: "Bidding opens for grid connections across designated desert development zones in Rajasthan.",
    timeVal: 230,
    views: 51200
  },
  {
    id: "i_8",
    title: "Wind Turbine Blades: Local Plant Exports First High-Efficiency Composite Models",
    source: "Bloomberg Industry",
    source_url: "https://bloomberg.com",
    date: "Live • 4h 20m ago",
    category: "Industry & Energy",
    importance: "Low",
    isTopStory: false,
    summary: "80-meter structural blades loaded for shipping to European offshore wind installations.",
    timeVal: 260,
    views: 19500
  },
  {
    id: "i_9",
    title: "Steel Mill Upgrades Blast Furnace Control Systems with Sensor Analytics Arrays",
    source: "Economic Times Industry",
    source_url: "https://economictimes.indiatimes.com",
    date: "Live • 4h 50m ago",
    category: "Industry & Energy",
    importance: "Medium",
    isTopStory: false,
    summary: "Computer vision analysis of molten metal flow reduces raw coal fuel consumption parameters by 6%.",
    timeVal: 290,
    views: 28100
  },
  {
    id: "i_10",
    title: "Pumped Hydro Storage Project Finalizes Engineering Design Feasibility Signoffs",
    source: "Bloomberg Industry",
    source_url: "https://bloomberg.com",
    date: "Live • 5h 20m ago",
    category: "Industry & Energy",
    importance: "High",
    isTopStory: false,
    summary: "1200MW secondary reserve reservoir proposed to backstop regional grid solar power variations.",
    timeVal: 320,
    views: 43200
  }
];

export default function NewsFeedPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Sections");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [viewArchive, setViewArchive] = useState(false);
  const [activeResearchArticle, setActiveResearchArticle] = useState<any>(null);

  // Filter
  const filteredFeed = feedData.filter((item) => {
    const matchesCat = selectedCategory === "All Sections" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sort function
  const sortedFeed = [...filteredFeed].sort((a, b) => {
    if (sortBy === "latest") return a.timeVal - b.timeVal;
    if (sortBy === "oldest") return b.timeVal - a.timeVal;
    if (sortBy === "priority-high") {
      const map: Record<string, number> = { High: 3, Medium: 2, Low: 1 };
      return (map[b.importance] || 0) - (map[a.importance] || 0);
    }
    if (sortBy === "priority-low") {
      const map: Record<string, number> = { High: 3, Medium: 2, Low: 1 };
      return (map[a.importance] || 0) - (map[b.importance] || 0);
    }
    if (sortBy === "views") {
      return (b.views || 0) - (a.views || 0);
    }
    return 0;
  });

  const topStory = sortedFeed.find(i => i.isTopStory) || sortedFeed[0];
  const secondaryStories = sortedFeed.filter(i => i.id !== topStory?.id);

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8] scroll-smooth">
      {/* Search & Sort Options Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl">
        <div className="flex-1 w-full sm:w-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8880]" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter news or search keyword..."
            className="pl-10 h-9 bg-[#fbfaf8] dark:bg-zinc-950 border-[#ece9e3] dark:border-zinc-800 text-xs text-[#2c2c2a] dark:text-[#fbfaf8] rounded-full"
          />
        </div>

        {/* Sort By Dropdown Control */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 px-3 h-9 rounded-full bg-[#fbfaf8] dark:bg-zinc-950 border border-[#ece9e3] dark:border-zinc-800 text-xs text-[#2c2c2a] dark:text-[#fbfaf8]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8a8880]" />
            <span className="text-[#8a8880] font-medium text-[11px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-semibold text-[#4a1b0c] dark:text-[#d85a30] focus:outline-none cursor-pointer"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="priority-high">Priority: High to Low</option>
              <option value="priority-low">Priority: Low to High</option>
              <option value="views">Most Public Views</option>
            </select>
          </div>

          <Button
            variant={viewArchive ? "default" : "outline"}
            size="sm"
            onClick={() => setViewArchive(!viewArchive)}
            className="h-9 px-4 text-xs font-medium rounded-full shrink-0"
          >
            <Archive className="w-3.5 h-3.5 mr-1.5" />
            {viewArchive ? "Archive" : "View Archive"}
          </Button>
        </div>
      </div>

      {/* Category Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? "bg-[#4a1b0c] text-[#fbfaf8] shadow-none"
                : "bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 text-[#8a8880] hover:text-[#2c2c2a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Category Count Bar */}
      <div className="flex items-center justify-between text-xs text-[#8a8880] px-1">
        <span>Section: <strong className="text-[#2c2c2a] dark:text-[#fbfaf8]">{selectedCategory}</strong></span>
        <span>Showing <strong className="text-[#4a1b0c] dark:text-[#d85a30]">{sortedFeed.length} Verified Articles</strong> (Minimum 10 per domain guaranteed)</span>
      </div>

      {/* Top Story Card */}
      {topStory && (
        <div className="news-elevate-card p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#8a8880] font-medium">Featured Story • {topStory.category}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#8a8880] flex items-center gap-1">
                <Eye className="w-3 h-3 text-[#8a8880]" /> {(topStory.views / 1000).toFixed(1)}k views
              </span>
              <Badge variant="high" className="bg-[#faece7] text-[#4a1b0c] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#f5d9d0]">
                {topStory.importance} Priority
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-full sm:w-28 h-24 rounded-lg bg-[#f0ece4] dark:bg-zinc-800 border border-[#ece9e3] dark:border-zinc-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#d85a30]" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-xs text-[#8a8880]">
                <span className="font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">{topStory.source}</span>
                <span>•</span>
                <span>{topStory.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-[#2c2c2a] dark:text-[#fbfaf8] leading-snug font-sans">
                {topStory.title}
              </h2>
              <p className="text-xs text-[#8a8880] leading-relaxed">
                {topStory.summary}
              </p>
              <div className="pt-1 flex items-center gap-4 text-xs">
                <a href={topStory.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4a1b0c] dark:text-[#d85a30] font-semibold hover:underline flex items-center gap-1">
                  Reference Source <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveResearchArticle(topStory)}
                  className="text-[#8a8880] hover:text-[#2c2c2a] font-medium flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d85a30]" /> Deep AI Synthesis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Stories List */}
      <div className="space-y-3">
        {secondaryStories.map((item) => (
          <div key={item.id} className="news-elevate-card p-5 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-2 shadow-none">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#8a8880]">
                <span className="font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">{item.source}</span>
                <span>•</span>
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#8a8880] flex items-center gap-1 font-mono">
                  <Eye className="w-3 h-3 text-[#8a8880]" /> {(item.views / 1000).toFixed(1)}k
                </span>
                <Badge variant="high" className="bg-[#faece7] text-[#4a1b0c] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#f5d9d0]">
                  {item.importance}
                </Badge>
              </div>
            </div>

            <h3 className="text-base font-semibold text-[#2c2c2a] dark:text-[#fbfaf8] hover:text-[#d85a30] transition-colors leading-snug font-sans">
              {item.title}
            </h3>
            <p className="text-xs text-[#8a8880] leading-relaxed">
              {item.summary}
            </p>

            <div className="pt-1 flex items-center justify-between text-xs">
              <div className="flex gap-4">
                <a href={item.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4a1b0c] dark:text-[#d85a30] font-semibold hover:underline flex items-center gap-1">
                  Reference Source <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveResearchArticle(item)}
                  className="text-[#8a8880] hover:text-[#2c2c2a] font-medium flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-[#d85a30]" /> Deep Research
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Research Modal */}
      <DeepResearchModal
        isOpen={!!activeResearchArticle}
        onClose={() => setActiveResearchArticle(null)}
        article={activeResearchArticle}
      />
    </div>
  );
}
