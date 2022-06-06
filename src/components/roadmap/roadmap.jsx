import React,{useRef , useLayoutEffect} from 'react';
import {Back , gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import PaintRoadmapTimeLine from '../paint-roadmap/paint-roadmap'; 
import './roadmap.styles.scss';

import Pointer from '../../assets/icons/pointer';



const RoadmapCard = ({i , name , forwardedRef}) => {
  gsap.registerPlugin(ScrollTrigger);
  
  useLayoutEffect(() => { 
    let el = forwardedRef.current;
    
    let t2 = gsap.timeline({
      defaults:{duration: .9 , ease: Back.easeOut.config(2) , opacity:0 },
      scrollTrigger: {
        trigger: el ,
        // start:'center top',
        end: 'bottom bottom',
        start:'center center',
        // start:'top center',
        scrub:1
      }
  
    });


  
    t2.from(`.${name}-card.roadmap__card`, {delay: i  , scale: .2 , transformOrigin: 'center'}, "=.2")
    .from(`.${name}-card .roadmap__card--main`, {scaleX :0 , transformOrigin: 'left'}, "=.2")
    .from(`.${name}-card .roadmap__card--after`, {scaleY: 0 , transformOrigin: 'top'},"=.4" )



    


    


    return () => {
      if(!!t2){
        t2.kill(true);
      }
    }

  },[forwardedRef,i,name])



  return (
    <div className={`roadmap__card ${name}-card`} ref={forwardedRef}>
      <Pointer className="roadmap__card--pointer"/>


      <div className="roadmap__card--main">

      </div>

      <div className='roadmap__card--after'>
      <h2>{`Phase${i}`}</h2>
      <ul className='roadmap__card--items'>

        <li>Website and social media launch</li>
        <li>Genesis social lunch</li>
        <li>Social swap lunch</li>

      </ul>
      </div>
    </div>
  )
}

const Roadmap = () => {
  let childRef = useRef(null); 
  return (
    <div  className='roadmap'>
      <h1 className='roadmap__title' >Roadmap</h1>
      <div className="roadmap__contents">
        <PaintRoadmapTimeLine/>
        <RoadmapCard forwardedRef={childRef} i={1}  name="first"/>
        <RoadmapCard forwardedRef={childRef} i={2}  name="second"/>
        <RoadmapCard forwardedRef={childRef} i={3}  name="third"/>
        <RoadmapCard forwardedRef={childRef} i={4}  name="fourth"/>
      </div>
    </div>
  )
}

export default Roadmap;