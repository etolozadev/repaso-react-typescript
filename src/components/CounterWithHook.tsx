import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  const {
    counter,
    increment
  } = useCounter({
    initValue: 0
  });
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