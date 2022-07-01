import './App.css';
import Header from './components/Header';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import { useSelector } from 'react-redux';
import Bookings from './components/Bookings';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/bookings' element={<Bookings/>}></Route>
          <Route path='/auth' element={<Auth/>}></Route>
          {/* <Route path='/auth' element={<SignUp/>}></Route> */}
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
