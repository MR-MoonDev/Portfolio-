import { GoogleGenAI, Chat } from "@google/genai";
import { ABOUT_CONTENT, EXPERIENCE, PROJECTS, SKILLS, HERO_CONTENT } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: API_KEY });

// Construct the system instruction based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${HERO_CONTENT.name}'s professional portfolio website.
Your role is to answer visitor questions about ${HERO_CONTENT.name} professionally, concisely, and accurately based ONLY on the provided context.

Context:
Name: ${HERO_CONTENT.name}
Title: ${HERO_CONTENT.title}
Bio: ${ABOUT_CONTENT}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}

Tone: Professional, friendly, and enthusiastic.
Constraints:
- Keep answers relatively short (under 100 words) unless asked for details.
- If asked about contact info, refer them to the contact section or social links.
- Do not make up facts not present in the context.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendChatMessage = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, but the API key is missing. I cannot process your request at this time.";
  }

  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
