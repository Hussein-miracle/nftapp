import React, { useState } from 'react';
import './nav.styles.scss';
import Button from '../button/button';
import HalfMoon from '../../assets/icons/moon.js';

const Nav = () => {
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
    <nav className='nav'>
      <h2 className='nav__title' id='home__title'>nftapp<span>&#9679;</span></h2>
      <ul className='nav__items'>
        <li className='nav__item'>Home</li>
        <li className='nav__item'>NFT</li>
        <li className='nav__item'>Roadmap</li>
        <li className='nav__item'>Team</li>
      </ul>
      <div className='nav__btns'>
        
        <Button text="Join Our Waitlist" bgColor={'#6D00C2'} large /> 

        <div className='nav__mode' onClick={handleClick} 
        >
          <HalfMoon clicked={clicked} />
        </div>
      </div>
    </nav>
  )
}

export default Nav