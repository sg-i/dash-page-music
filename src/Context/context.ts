import React, { createContext } from 'react';
interface themesInterface{
  light: {
    background: React.CSSProperties,
    foreground: React.CSSProperties,
    cardBackground: React.CSSProperties,
  },
  dark: {
    background: React.CSSProperties,
    foreground: React.CSSProperties,
    cardBackground: React.CSSProperties,
  },
  now: string,
  setTheme: (a:string)=>void
}
export const themes:themesInterface = {
  light: {
    background: {
      background: '#eef2f5',
            
    },
    foreground: {
      background: '#ffffff'
    },
    cardBackground:{
      // background: '#eef2f5',
      background: 'white',
      color:'white'
    }
    
  },
  dark: {
    background: {
      color: '#ffffff',
      background: '#393558'
    },
    foreground: {
      color: '#ffffff',
      background: '#433860'
    },
    cardBackground:{
      background: '#302b53',
      color:'white'
    }
  },
  now:'dark',
  setTheme:()=>{}
  // light: {
  //   background: 'rgb(138, 202, 245)',
  //   foreground: '#fgf4ff'
  // },
  // dark: {
  //   background: 'grb(17,53,88)',
  //   foreground: 'grb(87,56,96)'
  // }
};
export const typesFortheme = { light: themes.light, dark: themes.dark };
export const ThemeContext = createContext(themes);
