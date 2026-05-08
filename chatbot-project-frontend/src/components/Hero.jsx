// import { useState } from "react";

// export default function Hero({ onSend }) {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;
//     onSend(input);
//     setInput("");
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#0c0414",
//       color: "white",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center"
//     }}>
//       <h1>AI Chatbot</h1>
//       <input
//         placeholder="How can I help you today?"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") handleSend();
//         }}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// }