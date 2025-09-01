import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'; 

const ai = new GoogleGenAI({});

const genCon = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are an expert AI code reviewer with extensive experience in software development across multiple languages and frameworks. 
- Your goal is to analyze the code provided by the user and identify any bugs, logical errors, performance issues, security vulnerabilities, or stylistic problems. 
- Suggest clear, actionable improvements and best practices. 
- Explain your reasoning concisely and in simple language, so the developer can understand and apply it. 
- Be polite and encouraging, but precise. 
- If the code is correct, acknowledge it and suggest possible enhancements or optimizations. 
- have proper formating with proper paragraph breaks etc

Here is the code to review:

${prompt}`
  });

  // Extract the content from candidates
  
  
  
  const text = response.text

  return text
  
}

export default genCon;
