import React from 'react';
import './about.styles.scss';
import PaintAboutTimeLine from '../paint-about/paint-about'; 
import Button from '../button/button';
import { ReactComponent as QM } from '../../assets/icons/question-mark.svg';

import img1 from '../../assets/images/timeline-image-1.png';
import img2 from '../../assets/images/timeline-image-2.png';
import img3 from '../../assets/images/timeline-image-3.png';
import img4 from '../../assets/images/timeline-image-4.png';
import img5 from '../../assets/images/timeline-image-5.png';

const AboutImgContainer = ({srcUrl, title}) => {
  return (
    <div className='about__img-container'>
      <img className='about__img-container--img'  src={srcUrl} alt={title} title={title}/>
    </div>
  )
}
const AboutCard = ({text ,title}) => {
  return (
    <div className='about-card'>
      <h3 className='about-card__title'>{title}</h3>
      <p className='about-card__text'>
        {text}
      </p>
    </div>
  )
}

const About = () => {
  return (
    <div className='about'>
      <header className='about__header'>
        <div className='about__header--content'>

          <div className='about__header--content__left'>
          <h1>Are you ready to join our waitlist?</h1>
          <p>You will get a referral link after joining our waitlist. Be the first inline for early access by referring your friends. The more you refer the higher you'll go.</p>

          <Button text="Join our waitlist" bgColor={'#6D00C2'}  large />
          </div>
          

          <div className='about__header--content__right'>

            <QM className='question-mark'/>

          </div>

        </div>
      <h2 className='about__title'>
       The first DeFi aggregator with a social network
      </h2>
      </header>

      <div className='about__contents'>
        <PaintAboutTimeLine/>

        <section className='about__contents--wrapper'>
          <AboutImgContainer srcUrl={img1} title="Social Mining"/>
          <AboutCard title='Social Mining' text='Built in social mining protocols for all DeFi system.' />
        </section>

        <section className='about__contents--wrapper'>

        <AboutCard title='DeFi-hub' text='One-stop DeFi protocol aggregator with social network.' />

        <AboutImgContainer srcUrl={img2} title="DeFi-hub"/>

        </section>

        <section className='about__contents--wrapper'>
        <AboutImgContainer srcUrl={img3} title="Trade guild"/>

        <AboutCard title='Trade guild' text='Create your NFT/GameFi in 1 minute.' />
        </section>

        <section className='about__contents--wrapper'>

        <AboutCard title='DAO guild' text='The first asset management DAO infrastructure for communities.' />
        <AboutImgContainer srcUrl={img4} title="DAO guild"/>

        </section>

        <section className='about__contents--wrapper'>

        <AboutImgContainer srcUrl={img5} title="GameFi"/>
        <AboutCard title='GameFi' text='GameFi with creative function.' />

        </section>









      </div>
    </div>
  )
}

export default About;