import { useState } from "react";
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [theme, setTheme] = useState("theme1");

  return (
    <div className={`app-container ${theme}`}>
      
      {!started ? (
        // 👉 Start Page
        <StartPage onStart={() => setStarted(true)} />
      ) : (
        // 👉 Chat UI
        <>
          <Header setTheme={setTheme} />

          <ChatMessages chatMessages={chatMessages} />

          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </>
      )}

    </div>
  );
}

export default App;