import * as React from "react";
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={130}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#00486D"
      d="M.675 23v-.707l.642-.192q.61-.193.835-.61.225-.45.225-1.157v-15.9q0-.643-.16-1.028-.161-.418-.804-.643l-.738-.289v-.707H6.81l6.039 15.708 5.685-15.708h6.264v.707l-.514.16q-.61.195-.835.611-.225.386-.225 1.028a216 216 0 0 0-.032 3.726v8.769q0 1.863.032 3.694 0 .675.16 1.028.162.354.772.579l.642.224V23h-7.806v-.707l.707-.224q.61-.225.739-.579.16-.386.16-1.028v-6.97l.065-8.609L12.11 23H10.31L3.405 5.076l.128 7.324v7.966q0 .707.193 1.124t.803.579l.643.224V23zm32.588.45q-2.184 0-3.95-.932-1.768-.963-2.795-2.762-.996-1.83-.996-4.433t1.124-4.433a7.5 7.5 0 0 1 2.987-2.795Q31.53 7.1 33.777 7.1q1.831 0 3.116.61t1.96 1.574q.675.932.674 1.991 0 .9-.546 1.382-.514.482-1.35.482-.898 0-1.477-.643-.546-.642-.642-1.638a9 9 0 0 1 0-1.092q.063-.45 0-.867-.129-.546-.45-.74-.29-.192-.835-.192-2.025 0-3.116 1.638-1.06 1.605-1.06 5.236 0 3.116 1.189 4.786 1.188 1.67 3.694 1.67 1.477 0 2.44-.546.965-.578 1.767-1.638l.514.386q-.803 1.928-2.473 2.955-1.638.996-3.919.996M40.61 23v-.675l.674-.192q.643-.194.835-.578.193-.386.193-1.028V4.273q0-.675-.225-1.028-.192-.386-.835-.578l-.642-.225v-.675h7.805v.675l-.674.225q-.61.16-.803.546-.193.385-.193 1.06v16.286q0 .642.225 1.028.225.352.835.546l.61.192V23zM52.3 23v-.675l.386-.096q.61-.16.642-.61t-.418-1.028l-6.135-8.512 7.838-7.967q.481-.48.514-.867.064-.417-.578-.642l-.546-.161v-.675h5.075v.675l-.835.225q-.74.225-1.189.546-.45.289-1.028.9L50.31 9.925l7.355 10.504q.514.707.964 1.125.482.417 1.285.642l.45.128V23zM65.1 5.333q-1.06 0-1.8-.675-.738-.675-.738-1.702 0-1.06.739-1.702.738-.675 1.799-.675t1.799.675q.738.642.738 1.702 0 1.028-.739 1.702-.739.675-1.798.675M61.406 23v-.61l.482-.129q.642-.192.867-.578t.257-1.028v-7.741q0-.867-.032-1.767 0-.642-.257-.996-.225-.385-.868-.514l-.45-.096v-.578L67.028 7.1l.385.353-.096 4.561v8.673q0 .642.225 1.028.256.386.867.578l.353.097V23zm8.782 0v-.61l.514-.129q1.06-.321 1.06-1.574v-9.476q-.031-.675-.225-1.028-.192-.385-.835-.514l-.514-.128v-.578L75.392 7.1l.385.353.225 1.992a10.2 10.2 0 0 1 2.57-1.67q1.446-.675 2.827-.675 2.12 0 3.244 1.156 1.156 1.157 1.156 3.534v8.93q0 1.253 1.157 1.573l.353.097V23h-7.388v-.61l.482-.129q1.06-.353 1.06-1.574v-9.54q0-1.125-.482-1.638-.481-.514-1.606-.514-1.574 0-3.276 1.381V20.72q0 1.253 1.124 1.574l.321.097V23zm18.51 0v-.61l.481-.129q1.06-.352 1.06-1.606v-2.184q.032-1.124.032-2.217V4.048q0-.675-.225-.996-.225-.353-.867-.514l-.482-.128V1.8L94.32.45l.417.29-.128 4.529v15.386q.032.643.257 1.06.257.386.867.546l.45.129V23zm16.969-15.9q2.023 0 3.469.835a5.63 5.63 0 0 1 2.216 2.313q.803 1.445.803 3.34 0 .418-.032.803-.032.353-.128.675h-9.669q.032 3.308 1.22 4.754 1.221 1.445 3.534 1.445 1.606.001 2.602-.514.996-.546 1.831-1.51l.514.483q-.965 1.766-2.634 2.762-1.64.963-3.919.964-2.281 0-4.015-.964-1.736-.963-2.73-2.762-.965-1.831-.965-4.369 0-2.634 1.125-4.465 1.156-1.83 2.955-2.795 1.831-.995 3.823-.995m-.161.931q-.931 0-1.638.546-.675.515-1.092 1.863-.386 1.317-.45 3.726h5.75q.353-3.243-.257-4.69-.61-1.445-2.313-1.445m10.955 22.71q-1.285 0-2.024-.61t-.739-1.606q0-.9.611-1.445a2.2 2.2 0 0 1 1.413-.514q.804 0 1.317.289.514.288.9.835l.192.257q.739.9 1.382-.032a7.8 7.8 0 0 0 .803-1.35q.417-.803.899-2.12l-6.103-14.583q-.225-.61-.514-.931-.29-.354-.867-.579l-.546-.192v-.578h7.934v.578l-.675.192q-.707.225-.771.707-.031.45.225 1.189l3.276 8.544 3.148-8.609q.258-.706.193-1.188-.064-.481-.803-.643l-.707-.192v-.578h4.787v.578l-.707.225q-.707.192-1.028.578-.29.353-.546 1.06l-5.14 13.812q-1.284 3.533-2.634 5.204-1.317 1.702-3.276 1.702"
    />
  </svg>
);
export default SvgLogo;