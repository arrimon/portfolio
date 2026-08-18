"use client";

import { useState, useEffect, useCallback } from "react";

export function TypingText({ words = [], className = "" }: { words?: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[currentWordIndex] || "";

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, currentWord, isDeleting, isPaused, words]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting]);

  return (
    <span className={`text-primary font-bold ${className}`}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-primary animate-pulse align-middle" />
    </span>
  );
}
