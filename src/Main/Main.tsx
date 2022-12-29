import React, { useContext } from 'react';
import { ThemeContext, typesFortheme } from '../Context/context';
import './Main.scss';

const Main = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme[theme.now as keyof typeof typesFortheme].foreground} className="main-wrap">
      Main
    </div>
  );
};

export default Main;
