import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom';


export default function Navbar(props) {

  let navstyle={
    color: `${props.color}`,
  }

  return (
 <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" style={navstyle} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-a active" aria-current="page" style={navstyle} href="/">Home</a>
          {/* <Link className="nav-a active" aria-current="page" style={navstyle} to="/">Home</Link> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" style={navstyle} href="/about">{props.aboutText}</a>
        </li> */}
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary mx-3" type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
      <label className={`form-check-label mx-2   text-${props.colour}`}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={props.togglered} role="switch" id="flexSwitchCheckDefault" />
      <label className={`form-check-label mx-2   text-${props.seccolor}`}  htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={props.toggleblue} role="switch" id="flexSwitchCheckDefault" />
      <label className={`form-check-label mx-2 text-${props.thirdcolor}`}  htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
      </div>
      
    </div>
  </div>
</nav>
  )
  
}


Navbar.propTypes ={title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps={
    title: 'Enter Title here',
}