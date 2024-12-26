"use client";
import { useState, useEffect } from "react";
interface TypingEffectProps {
  text: string; // Specifying that `text` should be a string
  speed?: number; // Optional `speed` prop of type number
}
const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(() => displayedText + text[index]);
      index++;
      if (index === text.length - 1) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div>
      <span>{displayedText}</span>
      <span className="cursor animate-pulse">|</span>
    </div>
  );
};

export default TypingEffect;
