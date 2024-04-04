import React from 'react'
import "../styles/components/layout/Header.css";


const Header = () => {
  return (
    <header>
      <div className="holder">
        <img src="images/1.jpg" width={100} alt="logo-image" />
        <h1>Nutricion</h1>
      </div>
    </header>
  )
}

export default Header
