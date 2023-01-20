import React from "react";
import { Link } from "react-router-dom";
function Navbar(props){
    return(
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.link}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/">{props.disabled}</Link>
        </li>
      </ul>
      {/* To create different color pelette
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" style = {{height: '20px',width: '20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
        <div className="bg-danger rounded mx-2" style = {{height: '20px',width: '20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
        <div className="bg-success rounded mx-2" style = {{height: '20px',width: '20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
        <div className="bg-warning rounded mx-2" style = {{height: '20px',width: '20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
        <div className="bg-white rounded mx-2" style = {{height: '20px',width: '20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('white')}}></div>
      </div>
    */}
      <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
  </div>
    </div>
  </div>
</nav>
);
}

export default Navbar;