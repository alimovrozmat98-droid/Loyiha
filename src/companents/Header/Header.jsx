import React from 'react'
import './Header.css'
import Logo from "./images/header__logo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__container">
          <img className='header__img' src={Logo} alt="" />
          <input className='header__search' type="search" name="" id="" placeholder='Search Items' />
          <div className="header__btttn">
            <button className='header__btn'>0 Items Added</button>
          <button className='header__button'>Login or Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header