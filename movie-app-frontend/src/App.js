import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Router from './components/Router';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { retrieveUserToken } from './components/redux/userActions';
import { retrieveAdminToken } from './components/redux/adminActions';

axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('usersToken')} ${localStorage.getItem('adminsToken')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(retrieveUserToken())
    dispatch(retrieveAdminToken())
  },[dispatch])

  return (
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Router/>
        </main>
      </React.Fragment>
  );
}

export default App;
