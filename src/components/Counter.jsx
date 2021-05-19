import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Counter = () => {
  const context = useContext(MyContext);
  const { setCount, count } = context;

  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
