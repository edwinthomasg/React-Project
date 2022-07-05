import React from "react";
import { Routes, Route } from 'react-router-dom';
import Auth from './user/Auth';
import Home from './user/Home';
import About from './user/About';
import Movies from './user/Movies';
import Bookings from './user/Bookings';
import AdminBookings from './admin/AdminBookings';
import AdminMovies from './admin/AdminMovies';
import AdminHome from './admin/AdminHome';
import AdminLogin from "./admin/AdminLogin";
import MyProfile from "./user/MyProfile";
import AdminMyProfile from "./admin/AdminMyProfile";
import Feedbacks from "./admin/Feedbacks";
import AboutMovie from "./user/AboutMovie";

const Router = () => {
    return(<>
    <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:movieId' element={<AboutMovie />}></Route>
            <Route path='/bookings' element={<Bookings />}></Route>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/my-profile' element={<MyProfile/>}></Route>

            <Route path='/admin' element={<AdminHome/>}></Route>
            <Route path='/admin/home' element={<AdminHome />}></Route>
            <Route path='/admin/login' element={<AdminLogin />}></Route>
            <Route path='/admin/movies' element={<AdminMovies />}></Route>
            <Route path='/admin/bookings' element={<AdminBookings />}></Route>
            <Route path='/admin/my-profile' element={<AdminMyProfile />}></Route>
            <Route path='/admin/feedbacks' element={<Feedbacks />}></Route>

            <Route path='*' element={<Home/>}></Route> 
    </Routes>
    </>)
}

export default Router