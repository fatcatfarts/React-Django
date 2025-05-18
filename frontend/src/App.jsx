// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import NavBar  from './components/drawer';

import Home from './components/Home';
import About from './components/about';
import Create from './components/create'

function App(){
  return (
    <div className="App">     

    <NavBar 
    drawerWidth = {220}
    content = {    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
    </Routes>}
    />

    </div>
  )
}


export default App
