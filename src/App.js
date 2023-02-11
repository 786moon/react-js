import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login'
// import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {

  const [mode, setMode] = useState('light') // this will state the dark or light

  const togglemode = ()=> {
      if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#90C3C8'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
  }
  return (
    <>
      <Navbar contact="Contact" mode={mode} togglemode={togglemode} />
      <Login />
      {/* <Contact /> */}
      </>
  );
}

export default App;
