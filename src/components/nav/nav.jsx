import React from 'react';
import './nav.styles.scss';
import Button from '../button/button';
import {ReactComponent as HalfMoon} from '../../assets/icons/half-moon.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <h2 className='nav__title'>nftapp<span>&#9679;</span></h2>
      <ul className='nav__items'>
        <li className='nav__item'>Home</li>
        <li className='nav__item'>NFT</li>
        <li className='nav__item'>Roadmap</li>
        <li className='nav__item'>Team</li>
      </ul>
      <div className='nav__btns'>
        <Button text="Join Our Waitlist" bgColor={'#6D00C2'} large/>
        <div className='nav__mode'>
          <HalfMoon/>
        </div>
      </div>
    </nav>
  )
}

export default Nav