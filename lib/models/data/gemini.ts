import { openproviders } from "@/lib/openproviders"
import { ModelConfig } from "../types"

const geminiModels: ModelConfig[] = [
  {
    id: "gemini-2.0-flash-preview-image-generation",
    name: "Image Generation",
    provider: "Google",
    providerId: "google",
    modelFamily: "Gemini",
    description: "Multimodal flagship model with strong reasoning and code.",
    tags: ["multimodal", "vision", "reasoning", "flagship", "code"],
    contextWindow: 2000000,
    inputCost: 1.25,
    outputCost: 5.0,
    priceUnit: "per 1M tokens",
    vision: true,
    tools: true,
    audio: true,
    reasoning: true,
    openSource: false,
    speed: "Medium",
    intelligence: "High",
    website: "https://gemini.google.com",
    apiDocs: "https://ai.google.dev/api/docs",
    modelPage: "https://deepmind.google/technologies/gemini",
    releasedAt: "2024-02-15",
    apiSdk: () => openproviders("gemini-1.5-pro-002"),
  },
  {
    id: "gemini-2.0-flash",
    name: "ViMind 1.5",
    provider: "Google",
    providerId: "google",
    modelFamily: "Gemini",
    description: "Gemini 2 Flash model tuned for ultra-low latency tasks.",
    tags: ["fast", "multimodal", "next-gen"],
    contextWindow: 1000000,
    inputCost: 0.075,
    outputCost: 0.3,
    priceUnit: "per 1M tokens",
    vision: true,
    tools: true,
    audio: true,
    reasoning: false,
    openSource: false,
    speed: "Fast",
    intelligence: "Medium",
    website: "https://gemini.google.com",
    apiDocs: "https://ai.google.dev/api/docs",
    modelPage: "https://deepmind.google/technologies/gemini",
    releasedAt: "2024-12-11",
    apiSdk: () => openproviders("gemini-2.0-flash-001"),
  },
    {
    id: "gemini-2.5-flash-preview-05-20",
    name: "Deep ViMind",
    provider: "Google",
    providerId: "google",
    modelFamily: "Gemini",
    description: "ViMind model tuned for ultra-low latency tasks.",
    tags: ["fast", "multimodal", "next-gen"],
    contextWindow: 1000000,
    inputCost: 0.075,
    outputCost: 0.3,
    priceUnit: "per 1M tokens",
    vision: true,
    tools: true,
    audio: true,
    reasoning: false,
    openSource: false,
    speed: "Fast",
    intelligence: "Medium",
    website: "https://gemini.google.com",
    apiDocs: "https://ai.google.dev/api/docs",
    modelPage: "https://deepmind.google/technologies/gemini",
    releasedAt: "2024-12-11",
    apiSdk: () => openproviders("gemini-2.0-flash-001"),
  },

]

export { geminiModels }
