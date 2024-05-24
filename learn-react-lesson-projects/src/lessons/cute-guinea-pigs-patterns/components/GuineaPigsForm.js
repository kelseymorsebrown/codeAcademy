import React from 'react';

function GuineaPigsForm({
  favoriteGP,
  onSelectFavorite,
  onResetFavorite,
  names,
}) {
  return (
    <div data-testid="guineaPigsForm" id="guineaPigsForm">
      <label>
        Choose Your Favorite Guinea Pig:
        <select value={favoriteGP} onChange={onSelectFavorite}>
          <option value="0">{names[0]}</option>
          <option value="1">{names[1]}</option>
          <option value="2">{names[2]}</option>
          <option value="3">{names[3]}</option>
        </select>
      </label>
      <button onClick={onResetFavorite}>Reset Favorite</button>
    </div>
  );
}

export default GuineaPigsForm;
