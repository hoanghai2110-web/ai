import { claudeModels } from "./data/claude"
import { deepseekModels } from "./data/deepseek"
import { grokModels } from "./data/grok"
import { llamaModels } from "./data/llama"
import { mistralModels } from "./data/mistral"
import { openaiModels } from "./data/openai"
import { geminiModels } from "./data/gemini" // Thêm dòng này
import { ModelConfig } from "./types"

export const MODELS: ModelConfig[] = [
  ...geminiModels, // Thêm dòng này
  // ...llamaModels,
]
