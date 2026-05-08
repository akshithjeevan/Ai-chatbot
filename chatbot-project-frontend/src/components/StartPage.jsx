import "./StartPage.css";
import Antigravity from "./Antigravity";

export default function StartPage({ onStart }) {
    return (
        <div className="start-page">

            {/* Background animation */}
            <div className="bg-effect">
                <Antigravity
                    count={300}
                    magnetRadius={6}
                    ringRadius={7}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#5227FF"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="capsule"
                    fieldStrength={10}
                />
            </div>

            {/* Center content */}
          <div className="content">
  <h1>AI Chatbot</h1>

  <p className="subtitle">
    Smart conversations. Instant answers.
    Experience AI designed to help you think faster.
  </p>

  <button onClick={onStart} className="btn btn-outline-grad">
    Get Started
  </button>
</div>

        </div>
    );
}