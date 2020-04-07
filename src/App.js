import React from 'react';
import Header from './components/header';
import './styles.css';
import Main from './pages/main';
import Routes from './routes.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />     	
    </div>
  );
}

export default App;
