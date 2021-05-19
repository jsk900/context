import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Count = () => {
  const context = useContext(MyContext);
  const { count } = context;

  return <h1>{count}</h1>;
};

export default Count;
