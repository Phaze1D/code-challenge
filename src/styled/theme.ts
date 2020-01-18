export type ThemeType = {
  colors: {
    primary: string
    text: string
    background: string
  }
  breakpoints: {
    mobile: string
  }
};

export const theme: ThemeType = {
  colors: {
    primary: '#f9807d',
    text: '#414a60',
    background: '#e6eef8'
  },
  breakpoints: {
    mobile: '768px'
  }
};
