import React from 'react';
import { comments } from './commentData';
import Card from './Card';
import './styles.css';

function App() {
  const cardList = comments.map((comment, i) => (
    <Card key={`${comment.username}_comment_${i}`} commentObject={comment} />
  ));
  return <ul id="cardList">{cardList}</ul>;
}

export default App;
