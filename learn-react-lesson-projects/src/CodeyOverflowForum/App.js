import React from 'react';
import { comments } from './commentData';
import Card from './Card';

function App() {
  const cardList = comments.map((comment, i) => (
    <Card key={`${comment.username}_comment_${i}`} commentObject={comment} />
  ));
  return <ul>{cardList}</ul>;
}

export default App;
