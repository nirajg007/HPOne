import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const theme = createTheme({});

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Story />
      </Provider>
       </ThemeProvider >
    )
  }
]