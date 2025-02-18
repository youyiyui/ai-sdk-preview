export interface ModelConfig {
  id: string;
  name: string;
  inputPrice: number;
  outputPrice: number;
}

export const models: ModelConfig[] = [
  {
    id: "o3-mini",
    name: "O3 Mini",
    inputPrice: 1.1,
    outputPrice: 4.4,
  },
  {
    id: "gpt-4o",
    name: "GPT-4O",
    inputPrice: 2.5,
    outputPrice: 10,
  },
  {
    id: "gpt-4o-mini-2024-07-18",
    name: "GPT-4O Mini",
    inputPrice: 0.15,
    outputPrice: 0.6,
  },
  {
    id: "claude-3-5-sonnet-20241022",
    name: "Claude 3.5 Sonnet",
    inputPrice: 3,
    outputPrice: 15,
  },
  {
    id: "deepseek-r1-huoshan",
    name: "Deepseek R1 Huoshan",
    inputPrice: 0.6,
    outputPrice: 2.3,
  },
  {
    id: "deepseek-v3-huoshan",
    name: "Deepseek V3 Huoshan",
    inputPrice: 0.3,
    outputPrice: 1.2,
  },
];
