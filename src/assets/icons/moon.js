import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}

    style={{
      transform: props.clicked === 'true' ? 'rotate(210deg)' : 'rotate(0deg)',
      transition: 'all .3s linear',
    }}
  >
    <path
      d="M19.838 14.374c-.165-.279-.63-.712-1.786-.506-.64.114-1.29.165-1.94.135a8.678 8.678 0 0 1-6.098-2.91C8.672 9.595 7.847 7.645 7.836 5.54c0-1.177.227-2.312.692-3.385.454-1.042.134-1.59-.093-1.816C8.198.103 7.64-.228 6.547.226 2.326 2.001-.285 6.232.025 10.762c.31 4.262 3.302 7.905 7.265 9.277.949.33 1.95.527 2.982.568.165.01.33.02.495.02 3.457 0 6.697-1.63 8.74-4.406.692-.96.506-1.568.33-1.847Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent;