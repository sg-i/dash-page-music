import React, { useContext } from 'react';
import { ThemeContext, typesFortheme } from '../Context/context';
import './Main.scss';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Card from './Card/Card';
const Main = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme[theme.now as keyof typeof typesFortheme].foreground} className="main-wrap">
      Main
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
};

export default Main;
