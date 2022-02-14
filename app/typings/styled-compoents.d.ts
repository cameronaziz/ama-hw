import 'styled-components';

declare module 'styled-components' {
  export type Sizes = {
    tiny: `${number}px`;
    xxs: `${number}px`;
    xs: `${number}px`;
    sm: `${number}px`;
    md: `${number}px`;
    lg: `${number}px`;
    xl: `${number}px`;
    xxl: `${number}px`;
    huge: `${number}px`;
  }

  export type Screens = {
    mobile: string;
    tablet: string;
    small: string;
    desktop: string;
    large: string;
  }

  export type Colors = {
    background: string;
    primary: string;
    secondary: string;
  }

  export type Fonts = {
    cursive: string;
    regular:  string;
  }

  export type Palate = {
    amber: string;
    bone: string;
    black: string;
    pink: string;
    sand: string;
    white: string;
  }

  export interface DefaultTheme {
    color: Colors;
    font: Fonts;
    screen: Screens;
    size: Sizes;
    palate: Palate;
  }
}
