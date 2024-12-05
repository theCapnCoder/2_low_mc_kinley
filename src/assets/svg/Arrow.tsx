import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <g stroke="#00486D" strokeLinecap="round" clipPath="url(#arrow_svg__a)">
      <path strokeLinejoin="round" d="M12.657 1.343 18.314 7l-5.657 5.657" />
      <path d="M17.97 7H1" />
    </g>
    <defs>
      <clipPath id="arrow_svg__a">
        <path fill="#fff" d="M0 0h19v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrow;
