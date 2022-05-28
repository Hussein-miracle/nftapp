import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={80}
    height={4}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#6D00C2"
      strokeWidth={4}
      strokeDasharray="15 15"
      d="M.885 2h78.23"
    />
  </svg>
)

export default SvgComponent