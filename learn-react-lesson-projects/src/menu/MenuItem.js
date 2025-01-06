import React, { useRef } from 'react';
import styles from '../App.module.css';

const MenuItem = ({ color, index, name, route, pushToRoute }) => {
  const onClickHandler = ({ target }) => {
    const route = target.attributes.getNamedItem('route').value;
    pushToRoute(route);
  };

  const elementRef = useRef();

  function MouseOver(event) {
    event.target.style.background = '#ddd';
  }
  function MouseOut(event) {
    event.target.style.background = color;
  }

  return (
    <div
      ref={elementRef}
      className={styles.menuItem}
      onClick={onClickHandler}
      style={{
        backgroundColor: color,
      }}
      onMouseEnter={MouseOver}
      onMouseLeave={MouseOut}
      route={route}
      id={index.toString().length === 1 ? `0${index}` : `${index}`}
    >
      {name}
    </div>
  );
};

export default MenuItem;

//
