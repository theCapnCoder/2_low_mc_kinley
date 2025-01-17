import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#99B6C5"
      fillRule="evenodd"
      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16m17.668 9.408v-8.705h2.403l.318-3h-2.721l.004-1.501c0-.783.074-1.202 1.198-1.202h1.502V8H17.97c-2.887 0-3.903 1.455-3.903 3.902v1.801h-1.8v3h1.8v8.705z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFacebook;
