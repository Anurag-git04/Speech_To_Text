import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const copyToClipboard = async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support Speech Recognition.</p>;
  }

  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <br />
      <p>
        A React app that converts speech from your microphone into text and
        allows you to copy it easily.
      </p>

      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript || "Start speaking to see text here..."}
      </div>

      <div className="btn-style">
        <button onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
    </div>
  );
};

export default App;
