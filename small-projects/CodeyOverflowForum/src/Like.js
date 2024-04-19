import React from 'react';

function Like(props) {
  function handleClick() {
    alert('Liked!');
  }
  return <button onClick={handleClick}>like</button>;
}

export default Like;
