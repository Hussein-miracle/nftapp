import React,{useRef ,  useLayoutEffect} from 'react';
import RoadmapSvg from '../../assets/icons/timeline-2.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './paint-roadmap.styles.scss';


const PaintRoadmap = () => {
  const svg = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  useLayoutEffect(()=>{
    let element = svg.current;

    let svgPath1 = document.getElementsByClassName('path1')[0]; 
    const svgLen1 = svgPath1.getTotalLength();
    let svgPath2 = document.getElementsByClassName('path2')[0]; 
    const svgLen2 = svgPath1.getTotalLength();
    let svgPath3 = document.getElementsByClassName('path3')[0]; 
    const svgLen3 = svgPath1.getTotalLength();



        //start position of svg drawing
        svgPath1.style.strokeDasharray = svgLen1;
        svgPath2.style.strokeDasharray = svgLen2;
        svgPath3.style.strokeDasharray = svgLen3;



        //Hide svg before scrolling starts
        svgPath1.style.strokeDashoffset = svgLen1; 
        svgPath2.style.strokeDashoffset = svgLen2; 
        svgPath3.style.strokeDashoffset = svgLen3; 
 



        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger:element,
            start:'top center',
            end: 'bottom bottom',
            onUpdate:(self) =>{
              // console.log(self, 'self');
    
              const draw1 = svgLen1 * self.progress;
              // console.log(draw1, 'drawing progress');

              const draw2 = svgLen2 * self.progress;
              // console.log(draw2, 'drawing progress');

              const draw3 = svgLen3 * self.progress;
              // console.log(draw3, 'drawing progress');


    
              svgPath1.style.strokeDashoffset = svgLen1 - draw1;
              svgPath2.style.strokeDashoffset = svgLen2 -draw2;
              svgPath3.style.strokeDashoffset = svgLen3 -draw3;

              
            }
          }
        })
      
        return () => {
          if(!!t1){
            t1.kill();
          }
        };
  },[])
  return (
    <>
    <div ref={svg} className='paint-roadmap'>
      <RoadmapSvg/>
    </div>
    </>
  )
}

export default PaintRoadmap;