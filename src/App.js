import './App.css';
import React, { useState } from 'react'
//import light from './Core/Themes/light';
//import dark from './Core/Themes/dark';
import Pages from './Components/Module/Pages';
import { ThemeProvider } from 'styled-components';
import THEMES from './Core/Themes/Basic/Theme';
import Index from './Core/Themes/IndexTheme/Index';




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

      <div>

        <Pages theme={theme} changeTheme={changeTheme} />

      </div>

    </ThemeProvider>



  );
}

export default App;
