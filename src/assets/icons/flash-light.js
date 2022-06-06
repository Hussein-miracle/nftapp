import React , {useRef} from "react"
import {useMouse} from 'react-use';


const FlashLight = (props) => {
  const ref = useRef(null);
  const {docX, docY} = useMouse(ref);

  if(!!ref.current){
    ref.current.style.left  = `${docX}px`;
    ref.current.style.top = `${docY}px`;
  }




  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props} className="flash-light" ref={ref}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
  </svg>
  )
}
export default FlashLight;
