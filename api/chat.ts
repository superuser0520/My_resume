import { GoogleGenAI } from '@google/genai';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  try {
    const { messages, systemInstruction } = await request.json();

    if (!Array.isArray(messages) || !systemInstruction) {
      return new Response('Invalid request body: "messages" array and "systemInstruction" are required.', { status: 400 });
    }
      
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY is not defined in environment variables.');
      return new Response('Server configuration error: API_KEY not set.', { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Filter out any empty/placeholder model messages before sending to the API
    const validMessages = messages.filter(m => m.text.trim() !== '' || m.role === 'user');
    
    const contents = validMessages.map((msg: { role: 'user' | 'model', text: string }) => ({
        role: msg.role,
        parts: [{ text: msg.text }]
    }));
    
    const stream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
            systemInstruction: systemInstruction,
        }
    });
    
    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of stream) {
          const chunkText = chunk.text;
          if (chunkText) {
             controller.enqueue(encoder.encode(chunkText));
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return new Response(`An unexpected error occurred: ${errorMessage}`, { status: 500 });
  }
}
