import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './Main/Main';
import Menu from './Menu/Menu';
import { ThemeContext, themes, typesFortheme } from './Context/context';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState<typeof themes.now>(themes.now);
  const value = { light: themes.light, dark: themes.dark, now: theme, setTheme };

  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <div style={themes[theme as keyof typeof typesFortheme].background} className="container">
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/main" element={<Main />} />
          </Routes>
          <Menu />
          <Main />
          {/* <Main /> */}
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
