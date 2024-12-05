import * as React from "react";
import type { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={64}
    fill="none"
    {...props}
  >
    <path
      fill="#00486D"
      d="M3.84 0C1.735 0 0 1.735 0 3.84V64h48.64V3.84C48.64 1.735 46.905 0 44.8 0zm0 2.56H44.8c.71 0 1.28.57 1.28 1.28v57.6h-5.12V46.08H26.88v15.36H2.56V3.84c0-.71.57-1.28 1.28-1.28m3.84 5.12v10.24h14.08V7.68zm19.2 0v10.24h14.08V7.68zm-16.64 2.56h8.96v5.12h-8.96zm19.2 0h8.96v5.12h-8.96zM7.68 20.48v10.24h14.08V20.48zm19.2 0v10.24h14.08V20.48zm-16.64 2.56h8.96v5.12h-8.96zm19.2 0h8.96v5.12h-8.96zM7.68 33.28v10.24h14.08V33.28zm19.2 0v10.24h14.08V33.28zm-16.64 2.56h8.96v5.12h-8.96zm19.2 0h8.96v5.12h-8.96zM7.68 46.08v10.24h14.08V46.08zm2.56 2.56h8.96v5.12h-8.96zm19.2 0h8.96v12.8h-8.96z"
    />
  </svg>
);
export default SvgHouse;
