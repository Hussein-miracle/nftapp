import React , {useRef} from "react"
import {useMouse} from 'react-use';

const FlashOut = (props) => {
  const ref = useRef(null);
  const data = useMouse(ref);
  console.log(data);
  const {docX, docY} = useMouse(ref);
  if(!!ref.current){
    ref.current.style.left = `${docX}px`;
    ref.current.style.top = `${docY}px`;
  }

  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
    className="follow"
    ref={ref}
  >
    <title>{"Flash"}</title>
    <path
      d="M315.27 33 96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>)
}
export default FlashOut;
