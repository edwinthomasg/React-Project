import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Router from './components/Router';

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App"> */}
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Router/>
        </main>
      </React.Fragment>
      {/* </div> */}
    </Provider>
  );
}

export default App;
