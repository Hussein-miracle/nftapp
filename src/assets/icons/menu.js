import React, { useContext, useState } from 'react'

import { MenuContext } from '../../context/menu-context';
export const FirstMenu = (props) => {
  const [tapped , setTapped] = useState(false);
  const { setShowNav , showNav} = useContext(MenuContext);

  const handleClicked = () => {
    setShowNav(!showNav);

    setTapped(true);

    setTimeout(() => {
      setTapped(false);
    }, 650);
  }
  return (
    <svg 
    onClick={handleClicked}
    style={{
      '--bounce': tapped ? 'bounceIn' : ''
    }}
    className='first-menu'
    xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
  </svg>
  )
}

export const SecondMenu = (props) => {
  const [tapped , setTapped] = useState(false);
  const { setShowNav , showNav} = useContext(MenuContext);

  const handleClicked = () => {
    setShowNav(!showNav);

    setTapped(true);

    setTimeout(() => {
      setTapped(false);
    }, 650);
  }

  return (
    <svg
    onClick={handleClicked}
    style={{
      '--bounce': tapped ? 'bounceIn' : ''
    }}
    xmlns="http://www.w3.org/2000/svg"
    className="second-menu"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"Menu"}</title>
    <path
      fill="none"
      stroke="#6D00C2"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M80 160h352M80 256h352M80 352h352"
    />
  </svg>
  )
}




