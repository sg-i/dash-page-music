import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './Main/Main';
import Menu from './Menu/Menu';
import { ThemeContext, themes } from './Context/context';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes}>
        <div className="container">
          <Main />
          <Menu />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
