// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Componants/Navbar';
import Alert from './Componants/Alert';
import TextForm from './Componants/TextForm';
import About from './Componants/About';
import {
  BrowserRouter as Router,
  Route,

  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#092237';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")

    }
  }
  return (
    <>
      {/*<Navbar title="Demo" aboutText="About Us"/>*/}
      <Router>
        <Navbar title="Demo" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}  />
            <Route exact path="" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
