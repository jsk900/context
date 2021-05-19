import React, { useState } from 'react';

import MyContext from './MyContext';

const MyProvider = (props) => {
  const [count, setCount] = useState(0);
  const [socks, setSocks] = useState('a blue pair');
  const [harry, setHarry] = useState('');

  return (
    <MyContext.Provider
      value={{ count, setCount, socks, setSocks, harry, setHarry }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
