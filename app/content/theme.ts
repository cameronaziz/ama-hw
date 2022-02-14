import { Colors, DefaultTheme, Fonts, Palate, Screens, Sizes } from 'styled-components';

const palate: Palate = {
  amber: '#cbb6ac',
  black: '#251f18',
  bone: '#e6dac8',
  pink: '#d25b73',
  sand: '#ddcbb5',
  white: '#fafafa',
};

const screen: Screens = {
  mobile: `(max-width: 480px)`,
  tablet: `(min-width: 481px) and (max-width: 768px)`,
  small: `(min-width: 769px) and (max-width: 1024px)`,
  desktop: `(min-width: 1025px) and (max-width: 1200px)`,
  large: `(min-width: 1201px)`,
}

const size: Sizes = {
  tiny: '2px',
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '64px',
  xxl: '128px',
  huge: '256px',
};

const color: Colors = {
  background: palate.bone,
  primary: palate.pink,
  secondary: palate.bone,
};

const font: Fonts = {
  cursive: '"Quintessential", cursive',
  regular: '"Didot", serif',
}

const theme: DefaultTheme = {
  color,
  font,
  palate,
  screen,
  size,
};

export default theme;
