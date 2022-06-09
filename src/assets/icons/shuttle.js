import React , {useRef ,useLayoutEffect, useEffect , useState , memo, useMemo, useCallback} from "react"
import {useWindowSize , useWindowScroll} from 'react-use';
import sound1 from '../sounds/rocket-launch.mp3' 
import sound2 from '../sounds/rocket-motion.mp3' 
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Rocket = (props) => {

  const   [sound , setSound] = useState(sound2);
  const   [up , setUp] = useState(false);
  const [play , setPlay] = useState(false);
  

  const height = props.parentheight;
  let prev = window.scrollY;
  const rocketRef = useRef(null);
  const audioTag = useRef(null); 



  
  rocketRef?.current?.addEventListener('click',() => {
    setPlay(!play);
  })

  const handleNavigation = (e) => {
    const window = e.currentTarget;

  
    if (prev > window.scrollY) {
        // console.log("scrolling up");
        setUp(!false)
        rocketRef.current.style.transform = "rotate(20deg)";
    } else if (prev < window.scrollY) {
        // console.log("scrolling down");
        setUp(false)
        rocketRef.current.style.transform = "rotate(90deg)";
    }
    prev = window.scrollY;

  };

  const GetX = (xVal) => {
    const {width:windowWidth} = useWindowSize();
    let x = windowWidth > 280 ?  ((windowWidth * xVal) / 280) : xVal;
    return x;
  }
  const GetY = (yVal) => {
    let y = height > 1517 ?  ((height * yVal) / 1517) : yVal;
    return y;
  }


  const {y:scrollY} = useWindowScroll();

  // console.log(height , 'p height'); 

  const values =  [
    {x: GetX(10), y : -GetY(20) ,r : up ? 15 : 90 },
    {x: GetX(30), y   : GetY(60) ,r : up ? 25 :  95},
    {x:GetX(50),y: GetY(90) ,r : up ? 35 :  100},
    {x:GetX(85), y : GetY(190) ,r : up ? 65 :  105 },
    {x:GetX(85), y :  GetY(290) ,r : up ? 45 :  90},

    {x:GetX(80), y: GetY(405) ,r : up ? 65 :  105},
    {x:GetX(55), y:  GetY(625),r : up ? 35 : 100},
    {x:GetX(25), y:  GetY(795) ,r : up ? 45 : 90},
    {x:GetX(75), y   :  GetY(945) ,r : up ? 45 : 90},
    {x:GetX(45) , y :  GetY(1220) ,r : up ? 35 : 100},
    {x:GetX(40), y :  GetY(height) ,r :up ? 10 : 45}
  ];

  useEffect(() => {



    window.addEventListener('scroll', e => handleNavigation(e));



    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger:'.about',
        start:'top center',
        end: 'bottom bottom',
        onUpdate:(self) =>{
          // console.log(audioTag , 'audio ref' )
          // console.log(audioTag.current , 'audio ref current' )
          // console.log(sound , 'sound');
          let progress = Math.floor((self.progress * 10 ));
          const { x , y ,r} = values[progress];

          // console.log(progress , x , y, r , prev , 'self') ;
          // console.log(progress , x , y, r, 'self') ;
          // console.log(windowWidth , 'windowWidth');

          if(progress === 10){
            setPlay(false);
          }
          rocketRef.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${r}deg) `;
          
        },
        onEnter: (self) => {
          let progress = Math.floor((self.progress * 10 ));
          if(progress < 10){
            setPlay(true);
          }else if(progress === 10){
            setPlay(false);
          }

          if(play){
            audioTag.current.play();
          }else{
            audioTag.current.pause();
          }
          
        }
      }
    })
  
    return () =>{
      if(!!t1){
        t1.kill();
      }
    }

  }, [])


  useEffect(()=>{
    window.addEventListener('mouseover',()=>{
      if(audioTag?.current){
        if(play){
          audioTag.current.play();
        }else{
          audioTag.current.pause();
        }
      }

      return;
    })
    // window.addEventListener('mouseout',()=>{
    //   if(audioTag?.current){
    //     if(play){
    //       audioTag.current.play();
    //     }else{
    //       audioTag.current.pause();
    //     }
    //   }

    //   return;
    // })

  },[play])  


  return  (
    <>
    <audio ref={audioTag} src={`${sound}`} preload="auto"  id="musicTag"  />
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
    </>
  )
}

export default memo(Rocket);
