import React, { useContext, useState } from 'react'

import { MenuContext } from '../../context/menu-context';
export const CloseMenu = (props) => {
  const [tapped , setTapped] = useState(false);

  const { setShowNav } = useContext(MenuContext);

  const handleClicked = () => {
    setShowNav(false);

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
    className='close-menu'
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <title>{"Close"}</title>
    <path
      fill="none"
      stroke="#6D00C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M368 368 144 144m224 0L144 368"
    />
  </svg>
  )
}

export const SecondMenu = (props) => {
  const [tapped , setTapped] = useState(false);
  const { setShowNav , showNav} = useContext(MenuContext);

  const handleClicked = () => {
    setShowNav(false);

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




