import { useState } from 'react';

interface Options {
  initValue?: number
}

export const useCounter = ({initValue = 0}: Options) => {
    const [counter, setCounter] = useState<number>(initValue);
  
    const increment = (value: number) : void => {
      const newValue = counter + value;
      if (newValue <= 0) return;
      setCounter(counter + value);
    }
  return {
    counter,
    increment
  }
}