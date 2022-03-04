import React from 'react'

const Header = ({handleTOggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>NOTES</h1>
        <button onClick={()=>handleTOggleDarkMode((previousDarkmode)=>!previousDarkmode)}className='save'>Toggle Mode</button>
    </div>
  )
};

export default Header;