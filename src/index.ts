import {askClaude} from "./llm/anthropic-client.js"; 
import { DOCUMENTATION_ASSISTANT_PROMPT } from "./llm/prompts.js";
import { streamClaude } from "./llm/streaming.js";

const QUESTION = `Que es async//await en javascript?, de manara resumida y corta`;

async function main(): Promise<void> {
  console.log("╔════════════════════════════════════════╗");
  console.log("║        DevAssistant - Curso IA         ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("");
  console.log("Demo 1: sin streaming");
  console.log("");
  const answer = await askClaude(QUESTION, DOCUMENTATION_ASSISTANT_PROMPT);
  console.log("-".repeat(50));
  console.log(answer);
  console.log("-".repeat(50));
  console.log("");


  await new Promise((resolve)=>setTimeout(resolve,1500));


  console.log("Demo 2: Con streaming");
  console.log("");
  await streamClaude(QUESTION, DOCUMENTATION_ASSISTANT_PROMPT)
  console.log("");

}

main().catch((error: Error)=> console.error(" Error: ", error.message));