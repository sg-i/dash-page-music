import React, { useContext } from 'react';
import { ThemeContext } from '../Context/context';
import './Main.scss';

const Main = () => {
  const theme = useContext(ThemeContext);
  return <div style={theme.light}>Main</div>;
};

export default Main;
