import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles';

const images = {
  copycat:
    'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat:
    'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

export const CopyCat = ({
  name,
  value,
  handleChange,
  isCopying,
  toggleTape,
}) => {
  return (
    <div style={styles.divStyles}>
      <h1 style={{ marginBottom: 80 }}>Copy Cat {name || 'Tom'}</h1>
      <label htmlFor="copy-input"></label>
      <input
        id="copy-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button>
        <img
          role="button"
          alt={isCopying ? 'copycat' : 'quietcat'}
          src={isCopying ? images.copycat : images.quietcat}
          style={styles.imgStyles}
          onClick={toggleTape}
          data-testid="cat-image"
        />
      </button>
      <p data-testid="copied-text">{isCopying && value}</p>
    </div>
  );
};
