import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => setText(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newThought = {
      id: generateId(),
      text: text.trim(),
      expiresAt: getNewExpirationTime(),
    };

    if (text.trim() !== '') {
      setTimeout(() => {
        props.addThought(newThought);
        setText('');
      }, 500);
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" role="submit" value="Add" />
    </form>
  );
}
