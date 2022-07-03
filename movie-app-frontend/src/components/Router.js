import React from "react";
import { Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import About from './About';
import Movies from './Movies';
import Bookings from './Bookings';
import AdminBookings from './AdminBookings';
import AdminMovies from './AdminMovies';
import AdminHome from './AdminHome';
import AdminLogin from "./AdminLogin";
const Router = () => {
    return(<>
    <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/bookings' element={<Bookings />}></Route>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/about' element={<About/>}></Route>

            <Route path='/admin' element={<AdminHome/>}></Route>
            <Route path='/admin/home' element={<AdminHome />}></Route>
            <Route path='/admin/login' element={<AdminLogin />}></Route>
            <Route path='/admin/movies' element={<AdminMovies />}></Route>
            <Route path='/admin/bookings' element={<AdminBookings />}></Route>
    </Routes>
    </>)
}

export default Router