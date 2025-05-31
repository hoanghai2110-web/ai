import * as React from "react"
import type { SVGProps } from "react"

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={221}
    height={221}
    fill="none"
    viewBox="0 0 221 221"
    {...props}
  >
    {/* Background circle */}
    <circle cx={110.5} cy={110.5} r={100} fill="#FFF3E0" />
    
    {/* Central node */}
    <circle cx={110.5} cy={110.5} r={20} fill="#FF9800" />
    
    {/* Outer nodes */}
    <circle cx={60} cy={60} r={12} fill="#FB8C00" />
    <circle cx={161} cy={60} r={12} fill="#FB8C00" />
    <circle cx={60} cy={161} r={12} fill="#FB8C00" />
    <circle cx={161} cy={161} r={12} fill="#FB8C00" />
    
    {/* Connecting paths */}
    <path
      fill="none"
      stroke="#F57C00"
      strokeWidth={8}
      d="M110.5 90.5v-30m0 80v-30m-50-50h-30m80 0h30m-20.5-50 35.36 35.36m-35.36 64.64 35.36-35.36m-64.64-35.36 35.36-35.36m-35.36 64.64 35.36 35.36"
    />
  </svg>
)
export default Icon
