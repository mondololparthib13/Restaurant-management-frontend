import { useState } from 'react';
import Login from './components/Login.jsx'
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Booking from './components/Booking.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
