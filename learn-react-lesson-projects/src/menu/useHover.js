import React, { useRef, useState, useEffect } from 'react';

export default function useHover(ref) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEventListener('mouseover', handleMouseOver, ref.current);
  useEventListener('mouseout', handleMouseOut, ref.current);

  return isHovered;
}

function useEventListener(eventType, callback, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
