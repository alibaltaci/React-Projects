import { useState } from 'react';

export const useHoverColor = (initialColor, hoverColor) => {
    
  const [clr, setClr] = useState(initialColor);

  const handleColorOver = () => {
    setClr(hoverColor);
  }

  const handleColorOut = () => {
    setClr(initialColor);
  }

  return { clr, handleColorOver, handleColorOut };
}