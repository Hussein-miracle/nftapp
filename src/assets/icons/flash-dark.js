import React , {useRef} from "react"
import {useMouse} from 'react-use';

const FlashDark = (props) => {
  const ref = useRef(null);
  // const data = useMouse(ref);
  // console.log(data);
  const {docX, docY} = useMouse(ref);
  if(!!ref.current){
    ref.current.style.left = `${docX}px`;
    ref.current.style.top = `${docY}px`;
  }

  return (
  <svg     className="flash-dark"
  ref={ref} xmlns="http://www.w3.org/2000/svg" width={136} height={136} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 10h7l-9 13v-9H4l9-13z" />
  </svg>
)
}
export default FlashDark;
