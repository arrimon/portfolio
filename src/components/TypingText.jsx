import React, { useState, useEffect, useCallback } from 'react';

const TypingText = ({ words = [], className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[currentWordIndex] || '';

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        // Finished typing - pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      } else {
        // Finished deleting - move to next word
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
    <span className={`text-[var(--accent)] font-bold ${className}`}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-[var(--accent)] animate-pulse align-middle" />
    </span>
  );
};

export default TypingText;