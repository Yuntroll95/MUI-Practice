export const fontWeight = {
  light: 300,
  bold: 600,
};

export const colors = {
  white: '#FFFFFF',
  kakaoYellow: '#F7E318',
  kakaoBrown: '#341F20',
  lightGray: '#AEB5BC',
  gray: '#676D74',
  boldGray: '#353A3F',
  blue: '#3FA5F7',
  boxBlue: '#2b96ed',
  hoverBlue: '#4A97E6',
  underlineBlue: '#88BEF0',
  selectBlue: '#4a97e6',
  noneGray: '#cfd4d9',
};

export const borders = {
  borderBox: '1px solid #AEB5BC',
};

export const flex = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  `,
};

export const lightTheme = {
  bgColor: '#ffffff',
  textColor: '#000000',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  bgColor: '#060606',
  textColor: '#FFFFFF',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const theme = {
  fontWeight,
  colors,
  borders,
  flex,
  lightTheme,
  darkTheme,
};

export default theme;
