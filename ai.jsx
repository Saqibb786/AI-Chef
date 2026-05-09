import { HfInference } from "@huggingface/inference";
import OpenAI from "openai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`;

// Using Groq Model
// const client = new OpenAI({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
//   dangerouslyAllowBrowser: true,
// });

export async function getRecipeFromGroq(ingredientsArr, context) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!
          CONTEXT:
          ${context}
          `,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}

// Using Hugging Face Model
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr, context) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!
          CONTEXT:
          ${context}
          `,
        },
      ],
      options: { wait_for_model: true },
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
