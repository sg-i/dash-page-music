import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Context/context';
import './Menu.scss';
import MenuBody from './MenuBody/MenuBody';
import MenuUser from './MenuUser/MenuUser';

const Menu = () => {
  // const { dark, light, now, setTheme } = useContext(ThemeContext);
  const { dark, light, now, setTheme } = useContext(ThemeContext);

  // const [theme, setTheme] = useState(context);
  // console.log(context);
  const changeTheme = () => {
    console.log('тык');
    if (now === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  useEffect(() => {
    console.log(now);
  }, []);

  return (
    // <div style={{ backgroundColor: context.light.background }}>
    <div className="menu-user-wrap">
      {now}
      <MenuUser />
      <MenuBody />
      <button onClick={changeTheme}>Тема</button>
    </div>
  );
};

export default Menu;
