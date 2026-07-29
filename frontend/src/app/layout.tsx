import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "InsightFlow AI — Autonomous AI News Intelligence & Content Platform",
  description:
    "Production-ready multi-agent AI system for tech news harvesting, duplicate removal, Gemini deep research, Pinecone RAG knowledge base, and automated content publishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
