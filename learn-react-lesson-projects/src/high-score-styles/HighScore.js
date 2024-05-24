import React from 'react';
import { highScores } from './highScoreData.js';
import styles from './highScore.module.css';

export default function HighScore() {
  return (
    <>
      <div className={styles.HighScoreContainer}>
        <div className={styles.columnHeader}>
          <h3>User Name</h3>
          <h3>Score</h3>
          <h3>Date</h3>
        </div>
        {highScores.map(({ username, date, score }) => (
          <div className={styles.HighScore} key={username}>
            <div>{username}</div>
            <div>{score}</div>
            <div>{date}</div>
          </div>
        ))}
      </div>
    </>
  );
}
