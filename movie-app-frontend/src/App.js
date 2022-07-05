import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Router from './components/Router';
import { retrieveAdminToken, retrieveUserToken } from './components/redux/authActions';

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
