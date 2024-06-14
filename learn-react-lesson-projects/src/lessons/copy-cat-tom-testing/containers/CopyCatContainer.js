import React, { useState, useEffect } from 'react';
import { CopyCat } from '../components/CopyCat';

export const CopyCatContainer = () => {
  const [isCopying, setIsCopying] = useState(true);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const toggleTape = () => {
    setIsCopying(!isCopying);
  };

  return (
    <CopyCat
      value={input}
      isCopying={isCopying}
      handleChange={handleChange}
      toggleTape={toggleTape}
      data-testid="copied-text"
    />
  );
};
