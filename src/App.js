import './App.css';
import React from 'react'
import light from './Core/Themes/light';
import dark from './Core/Themes/dark';
import Pages from './Components/Module/Pages';
import { ThemeProvider } from 'styled-components';





function App() {



  return (

    <ThemeProvider theme={light}>
   
      <div>
       
        <Pages />

      </div>

    </ThemeProvider>



  );
}

export default App;
