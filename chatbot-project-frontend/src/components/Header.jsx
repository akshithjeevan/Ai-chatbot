import { useState } from "react";
import { Palette } from "lucide-react";

export default function Header({ setTheme }) {
  const [open, setOpen] = useState(false);

  const themes = [
    { name: "Theme 1", value: "theme1" },
    { name: "Theme 2", value: "theme2" },
    { name: "Theme 3", value: "theme3" }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        color: "white",
        position: "relative",
        zIndex: 10
      }}
    >
      {/* Left side */}
      <h3 style={{ margin: 0 }}>AI Chatbot</h3>

      {/* Right side dropdown */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, #2563eb, #4f46e5)",
            color: "white",
            cursor: "pointer"
          }}
        >
          <Palette size={18} />
          Theme
        </button>

        {/* Dropdown */}
        {open && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "45px",
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              padding: "10px",
              minWidth: "90px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
            }}
          >
            {themes.map((theme) => (
              <div
                key={theme.value}
                onClick={() => {
                  setTheme(theme.value);
                  setOpen(false);
                }}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "0.2s"
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "#1f2937")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "transparent")
                }
              >
                {theme.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}