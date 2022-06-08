import React, { useContext, useState } from 'react'

import { MenuContext } from '../../contexts/menu-context';


import Button from '../button/button';
import HalfMoon from '../../assets/icons/moon.js';
import { CloseMenu } from '../../assets/icons/close';


import './mobile-nav.scss';

const MobileNav = () => {
  const { showNav } = useContext(MenuContext);
  const [clicked, setClicked] = useState('false');
  const handleClick = () => {
    if(clicked === 'false'){
      setClicked('true');
    }
    if(clicked === 'true'){
      setClicked('false');
    }
  }
  return (
    <nav className='mobile-nav' style={{
      display: showNav ? 'flex' : 'none'
    }}>
    <h2 className='mobile-nav__title' id='home__title'>nftapp<span>&#9679;</span></h2>
    <CloseMenu />
      <ul className='mobile-nav__items'>
        <li className='mobile-nav__item'>Home</li>
        <li className='mobile-nav__item'>NFT</li>
        <li className='mobile-nav__item'>Roadmap</li>
        <li className='mobile-nav__item'>Team</li>
      </ul>
      <div className='mobile-nav__btns'>
        
        <Button text="Join Our Waitlist" bgColor={'#6D00C2'} large /> 

        <div className='mobile-nav__mode' onClick={handleClick} 
        >
          <HalfMoon clicked={clicked} />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav;