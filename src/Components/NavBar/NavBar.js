import React from 'react'
import "./NavBar.css";
function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix logo'></img>

      <div className='menu'>
        <h4 className='header1'>Login</h4>
        <h4 className='header2'>Sign up</h4>
      </div>

      <img className='avathar'  src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'></img>
    </div>
  )
}

export default NavBar
