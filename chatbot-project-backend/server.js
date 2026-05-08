import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();   // ✅ THIS WAS MISSING

app.use(cors());
app.use(express.json());

// ✅ Test route (optional)
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// ✅ Your chat route (your code — unchanged)
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful AI assistant for a student project chatbot.
Do not mention Google or that you are a language model.
Answer shortly in simple words.

If asked who you are, say you are an AI assistant created by Akshith Jeevan.
If asked who Akshith Jeevan is, say he is a software engineer who built this chatbot .

User: ${userMessage}`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (response.status === 429) {
      return res.json({
        reply: "⚠️ Demo limit reached. Please try again later.",
      });
    }

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));

    if (data.error) {
      const errorMsg = data.error.message.toLowerCase();

      if (errorMsg.includes("high demand")) {
        return res.json({
          reply: "⚠️ AI is busy right now. Please try again in a few seconds.",
        });
      }

      if (errorMsg.includes("quota") || errorMsg.includes("too many")) {
        return res.json({
          reply: "⚠️ Demo limit reached. Please try again later.",
        });
      }

      return res.json({
        reply: "API Error: " + data.error.message,
      });
    }

    let reply = "No response";

    if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content &&
      data.candidates[0].content.parts
    ) {
      reply = data.candidates[0].content.parts
        .map((p) => p.text)
        .join(" ");
    }

    res.json({ reply });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({
      reply: "Server error occurred",
    });
  }
});

// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running at http://localhost:3001");
});