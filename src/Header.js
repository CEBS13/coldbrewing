import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

const style ={
    width: "100px",
    height: "100px"
}

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" style={style}/>;
}

export default Header;