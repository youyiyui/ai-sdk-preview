import { openai } from '../../config/openai';
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  const result = streamText({
    model: openai(model || "gpt-4o"),
    system:
      "",
    messages,
  });

  return result.toDataStreamResponse();
}
