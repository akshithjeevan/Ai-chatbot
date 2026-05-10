import { useState } from "react";
import "./ChatInput.css";

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  async function sendMessage() {
    if (!inputText.trim()) return;

    const userMsg = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID()
    };

    const newMessages = [...chatMessages, userMsg];

    setChatMessages([
      ...newMessages,
      { message: "Typing...", sender: "robot", id: "typing" }
    ]);

    try {
  const res = await fetch("https://ai-chatbot-backend-bpf8.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: inputText })
  });

      const data = await res.json();

      setChatMessages([
        ...newMessages,
        {
          message: data.reply,
          sender: "robot",
          id: crypto.randomUUID()
        }
      ]);
    } catch {
      setChatMessages([
        ...newMessages,
        {
          message: "⚠️ Error getting response",
          sender: "robot",
          id: crypto.randomUUID()
        }
      ]);
    }

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        placeholder="Send a message"
        className="chat-input"
      />

      <button
        onClick={sendMessage}
        className="send-button"
      >
        Send
      </button>
    </div>
  );
}