import React,{useEffect , useRef} from 'react';

import { useMeasure } from "react-use";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './about.styles.scss';
import PaintAboutTimeLine from '../paint-about/paint-about'; 
import Rocket from '../../assets/icons/shuttle';
import Button from '../button/button';
import { ReactComponent as QM } from '../../assets/icons/question-mark.svg';

import img1 from '../../assets/images/timeline-image-1.png';
import img2 from '../../assets/images/timeline-image-2.png';
import img3 from '../../assets/images/timeline-image-3.png';
import img4 from '../../assets/images/timeline-image-4.png';
import img5 from '../../assets/images/timeline-image-5.png';

gsap.registerPlugin(ScrollTrigger);


const AboutImgContainer = ({srcUrl, title , i}) => {
  return (
    <div className={`about__img-container  about__img-container__${i}`}>
      <img className='about__img-container--img'  src={srcUrl} alt={title} title={title}/>
    </div>
  )
}
const AboutCard = ({text ,title , i}) => {
  return (
    <div className={`about-card  about-card__${i}`}>
      <h3 className='about-card__title'>{title}</h3>
      <p className='about-card__text'>
        {text}
      </p>
    </div>
  )
}

const About = () => {


  const [ref, { height }] = useMeasure();

  useEffect(() => {

    let tQ = gsap.timeline({defaults: {duration: .5 , delay : .2}});
    tQ.to('.question-mark',{y:10 ,repeat: -1 , yoyo: true});

  }, [])
  
  return (
    <div className='about' ref={ref}>
  
      <Rocket parentheight={height} />
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

        <section className='about__contents--wrapper about__contents--wrapper__1'>
          <AboutImgContainer srcUrl={img1} i="1" title="Social Mining"/>
          <AboutCard i="1" title='Social Mining' text='Built in social mining protocols for all DeFi system.' />
        </section>

        <section className='about__contents--wrapper about__contents--wrapper__2'>

        <AboutCard i="2" title='DeFi-hub' text='One-stop DeFi protocol aggregator with social network.' />

        <AboutImgContainer i="2" srcUrl={img2} title="DeFi-hub"/>

        </section>

        <section className='about__contents--wrapper about__contents--wrapper__3'>
        <AboutImgContainer i="3" srcUrl={img3} title="Trade guild"/>

        <AboutCard i="3" title='Trade guild' text='Create your NFT/GameFi in 1 minute.' />
        </section>

        <section className='about__contents--wrapper about__contents--wrapper__4'>

        <AboutCard i="4" title='DAO guild' text='The first asset management DAO infrastructure for communities.' />
        <AboutImgContainer i="4" srcUrl={img4} title="DAO guild"/>

        </section>

        <section className='about__contents--wrapper about__contents--wrapper__5'>

        <AboutImgContainer i="5" srcUrl={img5} title="GameFi"/>
        <AboutCard i="5" title='GameFi' text='GameFi with creative function.' />

        </section>









      </div>
    </div>
  )
}

export default About;