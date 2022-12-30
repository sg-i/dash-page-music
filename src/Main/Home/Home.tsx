import React, { useContext } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { ThemeContext, typesFortheme } from '../../Context/context';
import CardWindow from '../CardWindow/CardWindow';
import CryptoMini from './CryptoMini/CryptoMini';
const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="Home-wrap">
      Home
      <CardWindow />
      <CryptoMini />
    </div>
  );
};

export default Home;
