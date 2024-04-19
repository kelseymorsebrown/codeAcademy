import React from 'react';
import Like from './Like';

function Body(props) {
  return (
    <p>
      {props.comment}
      <Like />
    </p>
  );
}

export default Body;
