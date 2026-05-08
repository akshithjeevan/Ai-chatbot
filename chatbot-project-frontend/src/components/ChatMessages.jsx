import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";   // ✅ FIXED (no curly braces)
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-message-container" ref={chatMessagesRef}>

      {/* 👇 Empty state */}
      {chatMessages.length === 0 && (
        <div className="empty-state">
          What are you working on?
        </div>
      )}

      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;