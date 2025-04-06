"use client";

import { useState, useRef, useEffect } from "react";

// TypeScript interfaces for chat messages and response JSON
interface ChatMessage {
  role: string;
  content: string;
}

interface ResponseJson {
  status: number;
  thread: number;
  reply: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the chat window
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]); // State to store chat messages
  const [message, setMessage] = useState<string>(""); // State to store the current message being typed
  const [thread, setThread] = useState<number | null>(null); // State to store the thread ID (Important)
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref to the chat container for scrolling

  // Effect to scroll to the bottom of the chat container whenever chat history changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function startAI() {
    // Function to start the AI agent (Starts when clicked on the button)
    // This functions sends a request to the server to start the AI agent and get a thread ID
    const res: ResponseJson = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "start",
      }),
    }).then((res) => res.json());
    console.log(res); // To check the response from the server
    if (res.status == 200) {
      setChatHistory([
        {
          role: "assistant",
          content: "AI is ready to assist you!" + "\nThread ID: " + res.thread,
        },
      ]); // Set the initial chat history with a message from the assistant
      setThread(res.thread); // Set the thread ID to the state
    } else {
      // If Error while starting the AI agent
      setChatHistory([
        {
          role: "assistant",
          content: "AI is not ready to assist you!",
        },
      ]); // Set the initial chat history with an error message from the assistant
    }
  }

  async function sendMessage() {
    // Function to send a message to the AI agent
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: message },
    ]); // Add the user's message to the chat history
    const tempMsg = message; // To store the message to be sent to the server
    setMessage(""); // Reset the message input field
    const res: ResponseJson = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "send",
        thread: thread,
        message: tempMsg,
      }),
    }).then((res) => res.json());
    console.log(res); // To check the response from the server
    if (res.status == 200) {
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: "assistant", content: res.reply },
      ]); // Add the assistant's reply to the chat history
    } else {
      // If Error while sending the message to the AI agent
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: "assistant", content: "AI is not ready to assist you!" },
      ]);
    }
  }

  return (
    <>
      {/* Button to open the chat window and start the AI agent */}
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-12 h-12 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            startAI();
          }
          if (isOpen) {
            setChatHistory([]);
            setMessage("");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          }}
          className="fixed bottom-[5rem] right-6 bg-white p-4 rounded-lg border border-[#e5e7eb] w-[400px] h-[550px] flex flex-col"
        >
          {/* Chat Header */}
          <div className="flex flex-col space-y-1.5 pb-4">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by Mendable and Vercel
            </p>
          </div>

          {/* Messages */}
          <div
            className="pr-4 h-[400px] overflow-y-scroll flex flex-col gap-5 mb-4"
            style={{ minWidth: "100%" }}
            ref={chatContainerRef}
          >
            {chatHistory.map((message, index) => {
              if (message.role === "user") {
                return (
                  <div key={index} className="flex gap-3 text-gray-600 text-sm">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 border p-1">
                        <svg
                          stroke="none"
                          fill="black"
                          viewBox="0 0 16 16"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                      </div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700">You</span>{" "}
                      {message.content}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex gap-3 text-gray-600 text-sm">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 border p-1">
                        <svg
                          stroke="none"
                          fill="black"
                          viewBox="0 0 24 24"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          />
                        </svg>
                      </div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700">
                        Assistant
                      </span>{" "}
                      {message.content}
                    </p>
                  </div>
                );
              }
            })}
          </div>

          {/* Input */}
          <div className="flex items-center pt-0">
            <form
              className="flex items-center justify-center w-full space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (message.trim() === "") return;
                sendMessage();
              }}
            >
              <input
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
