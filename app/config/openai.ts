import { createOpenAI } from '@ai-sdk/openai';

export const openai = createOpenAI({
  baseURL: 'https://api.302.ai',
  apiKey: process.env.OPENAI_API_KEY,
});
