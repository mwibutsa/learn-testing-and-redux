import React from 'react';
import Posts from './components/posts';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
