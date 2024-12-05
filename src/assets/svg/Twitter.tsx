import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16m15.52-2.995.034.554-.56-.068c-2.036-.26-3.815-1.141-5.326-2.621l-.74-.735-.19.543c-.402 1.208-.145 2.485.695 3.344.447.474.346.542-.426.26-.268-.09-.503-.158-.526-.124-.078.079.19 1.107.403 1.514.291.564.884 1.118 1.533 1.446l.549.26-.65.01c-.626 0-.648.012-.581.25.224.734 1.108 1.513 2.093 1.852l.694.238-.605.361a6.3 6.3 0 0 1-3 .836c-.503.012-.917.057-.917.09 0 .114 1.365.747 2.16.995 2.384.734 5.215.418 7.342-.836 1.51-.893 3.021-2.666 3.727-4.384.38-.915.76-2.587.76-3.39 0-.52.034-.587.66-1.209.37-.361.717-.757.784-.87.112-.214.101-.214-.47-.022-.951.339-1.085.294-.615-.215.347-.361.76-1.017.76-1.209 0-.034-.167.023-.357.125-.202.113-.65.282-.985.384l-.605.192-.548-.373c-.302-.203-.727-.43-.951-.497-.571-.158-1.444-.136-1.959.045-1.399.508-2.283 1.82-2.182 3.254"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTwitter;
