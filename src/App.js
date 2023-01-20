import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import propTypes from 'prop-types'
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Creating class component, by default there is functional component

function App(){
    const removeBodyClasses = () =>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-primary')
    }
    const [mode,setMode] = useState("light")
    const toggleMode = (cls) =>{
      removeBodyClasses()
      document.body.classList.add('bg-'+cls)
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = "#2b4978";
        showAlert("Dark mode has been enabled", "success")
        document.title = "Text Utility - Dark Mode"

        setInterval(() => {
          document.title = "Text Utility - Dark Mode -Awesome"
        }, 1000);
        setInterval(() => {
          document.title = "Good User Experience"
        }, 1500);
      }else{
        setMode("light")
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success")
        document.title = "Text Utility - Light Mode"
      }
    }

    const [alert,setAlert] = useState(null) //alert state is an object
    const showAlert = (message,type) =>{
      setAlert({msg:message,type: type})
      //set time out is arrow function to set object for few time
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    return (
      <>
        <Router>
        <Navbar heading = "Text Utilization" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm alert = {alert} showAlert = {showAlert} mode = {mode}/>}/>
            <Route exact path="/about" element={<About mode = {mode}/>}/>
          </Routes>
        </div>
        </Router>
      </>
    )
}
export default App;

Navbar.propTypes = {
  heading: propTypes.string.isRequired,
  home: propTypes.string,
  link: propTypes.string,
  dropdown: propTypes.string,
  disabled: propTypes.string,
};

Navbar.defaultProps = {
  home: "Home",
  link: "Link",
  about: "About",
  dropdown: "Drop"
};