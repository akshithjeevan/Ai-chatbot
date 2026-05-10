import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import { BotMessageSquare } from 'lucide-react';
import { User } from 'lucide-react';
import "./ChatMessage.css";


export default function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user"
      ? "chat-message-user"
      : "chat-message-robot"
    }>
      {sender === "robot" && (
        <BotMessageSquare  className="chat-message-profile" size={28} color="white"/>
      )}

      <div className="chat-message-text">
        {message}
      </div>

      {sender === "user" && (
        
        <User className="chat-message-profile" size={28} color="white"/>
      )}
    </div>
  );
}