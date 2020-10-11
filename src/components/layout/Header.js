import React, { useState, useEffect } from 'react';
import { logo } from '../../assets/images/index';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarEl = () => {
    if (showSidebar) {
      return (
        <div className="option-sidebar">
          <div className="container">
            <div className="top d-flex flex-column align-items-center">
              <a href="/">Features</a>
              <a href="/">Pricing</a>
              <a href="/">Resources</a>
            </div>
            <div className="bottom d-flex flex-column align-items-center">
              <a href="/">Login</a>
              <a href="/" className="signup">Sign Up</a>
            </div>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    const sidebarHandler = (e) => {
      if (e.target.className !== "sidebar" && e.target.className !== "fa fa-bars") setShowSidebar(false)
    }

    window.addEventListener("click", sidebarHandler)
    return () => {
      window.removeEventListener("click", sidebarHandler)
    }
  }, [])

  return (
    <div className="header position-relative">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center">
          <img src={logo} alt="" />
          <div className="menu ml-4">
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
          </div>
        </div>
        <div className="right">
          <button className="login mr-4">Login</button>
          <button className="signup">Sign Up</button>
        </div>
        <div className="sidebar" onClick={() => !showSidebar ? setShowSidebar(true) : setShowSidebar(false)}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
      {sidebarEl()}
    </div>
  )
}
