import React , {useRef , useEffect , useCallback} from "react"
import {useWindowSize , useWindowScroll} from 'react-use';

import {gsap} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Rocket = (props) => {
  const {width:windowWidth, height:windowHeight} = useWindowSize();
  const {x:scrollX, y:scrollY} = useWindowScroll();

  let prev = window.scrollY;
  const rocketRef = useRef(null);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
  
    if (prev > window.scrollY) {
        // console.log("scrolling up");
        rocketRef.current.style.transform = "rotate(20deg)";
    } else if (prev < window.scrollY) {
        // console.log("scrolling down");
        rocketRef.current.style.transform = "rotate(90deg)";
    }
    prev = window.scrollY;

  },[prev]);


  useEffect(() => {

    const values = [
        {x:100, y : -20},
        {x: 300 , y   : 30},
        {x:500,y: 200},
        {x:450 , y : 450},
        {x:550  , y : 600},
        {x:200 , y:850},
        {x:750 , y: 900},
        {x: 200 , y: 1050},
        {x: 760 , y   : 1250},
        {x:770  , y : 1550},
        {x:350  , y : 1850}
      ]
    
      window.addEventListener('scroll', e => handleNavigation(e));


    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger:'.about',
        start:'top center',
        end: 'bottom bottom',
        onUpdate:(self) =>{
          let progress = Math.floor((self.progress * 10 ));

          const { x , y } = values[progress];

          console.log(progress , x , y, prev , 'self') ;
          console.log(windowHeight , 'windowHeight');
          console.log(windowWidth , 'windowWidth');
          console.log(scrollX , 'scrollX');
          console.log(scrollY , 'scrollY');
          rocketRef.current.style.transform = `translateX(${x}px) translateY(${y}px) `;




  
          
        }
      }
    })
  
    return () =>{
      if(!!t1){
        t1.kill(true);
      }
    }

  }, [prev , handleNavigation])





  return  (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      className="rocket"
      ref={rocketRef}

      viewBox="0 0 512 512"
      {...props}
    >
      <title>{"Rocket"}</title>
      <path className="rocket__body" d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194.1 194.1 0 0 0 1.19 19.7 19.53 19.53 0 0 0 5.7 12L170.7 375a19.59 19.59 0 0 0 12 5.7 193.53 193.53 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1 1 67.86 0 47.95 47.95 0 0 1-67.86 0z" />
      <path className="rocket__tail"  d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45 60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66z" />
    </svg>
  )
}

export default Rocket;
