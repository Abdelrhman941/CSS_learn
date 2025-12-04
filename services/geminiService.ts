import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid immediate crash, though we handle missing key in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askCSSTutor = async (question: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. Please check your configuration.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `You are a world-class Senior Frontend Engineer and CSS Educator. 
        Your goal is to answer CSS questions concisely and accurately. 
        - Provide code snippets where relevant.
        - Explain "why" something works, not just "how".
        - Keep answers focused on modern CSS (Flexbox, Grid, Custom Properties).
        - If the user asks for code, provide clean, commented CSS.
        - Use Markdown formatting.`
      }
    });
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to fetch answer from CSS Tutor.");
  }
};
