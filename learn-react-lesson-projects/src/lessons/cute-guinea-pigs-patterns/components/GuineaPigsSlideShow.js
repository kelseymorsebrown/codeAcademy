import React from 'react';

function GuineaPigsSlideShow({ src, isFavorite, name }) {
  return (
    <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
      <h1>Cute Guinea Pigs</h1>
      <img
        alt="Guinea Pigs Slideshow"
        src={src}
        className={isFavorite ? 'favorite' : ''}
      />
      <p className={isFavorite ? 'nameFavorite' : 'name'}>{name}</p>
    </div>
  );
}

export default GuineaPigsSlideShow;
