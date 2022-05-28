import React from 'react';
import './team.styles.scss';

import img1 from '../../assets/images/team-image-1.png';
import img2 from '../../assets/images/team-image-2.png';
import img3 from '../../assets/images/team-image-3.png';
import img4 from '../../assets/images/team-image-4.png';

const TeamCard = ({imgUrl , name, role}) => {
  return (
    <div className='team__card'>
      <img src={imgUrl} alt={name} />
      <div className='team__card--content'>
        <h2 className='team__card--name'>{name}</h2>
        <h6 className='team__card--role'>{role}</h6>
      </div>
    </div>
  )
}
const Team = () => {
  return (
    <div className='team'>
      <h1 className='team__title'>Team</h1>
      
      <div className='team__content'>
        <TeamCard  imgUrl={img1} name="Itachi" role='creator'/>
        <TeamCard  imgUrl={img2} name="Hiroshi" role='creator'/>
        <TeamCard  imgUrl={img3} name="Naruto" role='creator'/>
        <TeamCard  imgUrl={img4} name="Kuroko" role='creator'/>
      </div>
    </div>
  )
}

export default Team;