import './App.css';
import React, { useState } from 'react'
//import light from './Core/Themes/light';
//import dark from './Core/Themes/dark';
import Pages from './Components/Module/Pages';
import { ThemeProvider } from 'styled-components';
import THEMES from './Core/Themes/Basic/Theme';
import Index from './Core/Themes/IndexTheme/Index';
import { GlobalStyles } from './GlobalStyles';




function App() {
  const [theme, setTheme] = useState('light');
 
  const changeTheme = (value) => {

    if (value) {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
    else {

      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  };


  return (

    <ThemeProvider theme={Index[theme]}>
  <GlobalStyles/>


     

        <Pages theme={theme} changeTheme={changeTheme} />

      

    </ThemeProvider>



  );
}

export default App;
