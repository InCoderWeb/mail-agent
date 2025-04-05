// import * as dotenv from "dotenv";
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import {
//     START,
//     END,
//     MessagesAnnotation,
//     StateGraph,
//     MemorySaver,
// } from "@langchain/langgraph";

// dotenv.config();

// const llm = new ChatGoogleGenerativeAI({
//     model: "gemini-2.0-flash",
//     temperature: 0,
//     maxOutputTokens: 1000,
// });


// async function callModel(state) {
//     const response = await llm.invoke(state.messages);
//     return { messages: response };
// }


// const workflow = new StateGraph(MessagesAnnotation)
//     .addNode("model", callModel)
//     .addEdge(START, "model")
//     .addEdge("model", END);

// const memory = new MemorySaver();
// const app = workflow.compile({ checkpointer: memory });

// const config = { configurable: { thread_id: "123" } };

// let res = await app.invoke(
//     {
//         messages: [
//             {
//                 role: "user",
//                 content: "Summarize the following email: Dear John, I hope this email finds you well. I wanted to reach out to discuss our upcoming project deadline. Please let me know if you have any questions or concerns. Best regards, Jane",
//             },
//         ],
//     },
//     config
// );

// console.log(res);

// res = await app.invoke(
//     {
//         messages: [
//             {
//                 role: "user",
//                 content: "What was the original email?",
//             },
//         ],
//     },
//     config
// );

// console.log(res);