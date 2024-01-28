
import { React, useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#072a4a";
      showAlert("Dark mode enabled")
      document.title = "Dark Mode - Text Utils";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled")
      document.title = "Light Mode - Text Utils";
    }
  }
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} title="Text Utils" />
        <Alert message={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze below" />} />
          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
