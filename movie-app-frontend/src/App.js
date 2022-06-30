import './App.css';
import Header from './components/Header';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Order from './components/Orders';
import SignUp from './components/SignUp';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/orders' element={<Order/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
