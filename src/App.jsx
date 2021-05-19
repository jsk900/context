import React, { useContext } from 'react';
import MyContext from './context/MyContext';
import Count from './components/Count';

import './App.css';
import Counter from './components/Counter';

const App = () => {
  const context = useContext(MyContext);

  const { socks } = context;

  return (
    <main>
      <h1>Welcome to React</h1>
      {socks}
      <Count />
      <Counter />
    </main>
  );
};

export default App;
