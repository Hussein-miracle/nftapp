import React from 'react'
import './footer.styles.scss';
import { ReactComponent  as Discord } from '../../assets/icons/discord.svg';
import { ReactComponent  as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent  as Telegram } from '../../assets/icons/telegram.svg';

const Footer = () => {
  return (
    <div className='footer'>
            <h2 className='footer__title' ><a href='#home__title'>nftapp<span>&#9679;</span></a></h2>

      <div className='footer__btns'>
        <button className='footer__btn'>
          <Discord/>
        </button>
        <button className='footer__btn'>
          <Twitter/>
        </button>
        <button className='footer__btn'>
          <Telegram/>
        </button>
      </div>
    </div>
  )
}

export default Footer;