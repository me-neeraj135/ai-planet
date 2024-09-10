// Header.js
import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import '../style/header.css'
const Header = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault() // This prevents the page from refreshing

    navigate('/')
  }
  return (
    <header className="app-header">
      <div className="container">
        <a href="#" onClick={handleClick}>
          <img
            className="app-logo"
            src="https://www.eu-startups.com/wp-content/uploads/2022/04/DPhi-logo-500x500.png"
            alt="logo"
          />
        </a>
      </div>
    </header>
  )
}

export default Header
