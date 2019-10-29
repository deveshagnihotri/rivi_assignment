import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <LandingPage />
    </div>
  );
}

export default App;
