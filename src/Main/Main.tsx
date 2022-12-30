import React, { useContext } from 'react';
import { ThemeContext, typesFortheme } from '../Context/context';
import './Main.scss';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import CardWindow from './CardWindow/CardWindow';
import Home from './Home/Home';
const Main = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme[theme.now as keyof typeof typesFortheme].foreground} className="main-wrap">
      Main
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
