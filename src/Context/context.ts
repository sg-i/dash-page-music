import { createContext } from 'react';
export const themes = {
  light: {
    background: '#ffffff',
  },
  dark: {
    background: '#000000',
  },
};

export const ThemeContext = createContext(themes);
