import React, { useRef } from 'react';
import useHover from './useHover';

const MenuItem = ({ color, index, name, route, pushToRoute }) => {
  const onClickHandler = ({ target }) => {
    const route = target.attributes.getNamedItem('route').value;
    pushToRoute(route);
  };

  const elementRef = useRef();

  const isHovered = useHover(elementRef);

  return (
    <div
      ref={elementRef}
      className="hover-element"
      onClick={onClickHandler}
      route={route}
      style={{ backgroundColor: isHovered ? `#ddd` : color }}
      id={index.toString().length === 1 ? `0${index}` : `${index}`}
    >
      {name}
    </div>
  );
};

export default MenuItem;
