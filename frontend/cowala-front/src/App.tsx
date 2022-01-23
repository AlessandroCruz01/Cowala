import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global'
import Header from './components/Header';
import Form from './components/Form';

function App() {

  //Funcao dark
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>

      <div>
        <GlobalStyle/>

        <Header toggleThemes={toggleTheme}/>

        <Form />
      </div>

    </ThemeProvider>
  );
}

export default App;
