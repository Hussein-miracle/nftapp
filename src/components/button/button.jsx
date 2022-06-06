import React from 'react';
import './button.styles.scss';
import {ReactComponent as DiscordIcon} from '../../assets/icons/discord.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import {ReactComponent as TelegramIcon} from '../../assets/icons/twitter.svg';

const Button = ({text,iconType,bgColor,large}) => {
  
  return (
    <button className='custom-btn' style={{
      backgroundColor: `${bgColor}`,
      width: large ?  '12rem' : '9rem',
      // display: !!iconType ? 'flex' : 'inline-block',
    }}>
      {iconType === 'discord' ? <DiscordIcon/> : null}
      {iconType === 'twitter' ? <TwitterIcon/>:null}  
      {iconType === 'telegram'? <TelegramIcon/>: null }

      {text}
    </button>
  )
}

export default Button