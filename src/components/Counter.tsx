import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(10);

  const increment = (value: number) : void => {
    setCounter(counter + value);
  }
  return (
    <div>
      <h2>Counter</h2>
      {counter}

      <div>
        <button onClick={() => increment(1)}>+1</button>
        &nbsp;
        <button onClick={() => increment(-1)}>-1</button>
      </div>
    </div>
  )
}