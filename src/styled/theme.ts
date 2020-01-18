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
    text: '#F6F5F7',
    background: '#414A60'
  },
  breakpoints: {
    mobile: '768px'
  }
};
