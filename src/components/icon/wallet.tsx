import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const WalletIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M17.648 1.76a1.249 1.249 0 1 1 0 2.497H3.272a.625.625 0 0 0 0 1.248h14.376c1.378 0 2.5 1.12 2.5 2.498v8.74a2.5 2.5 0 0 1-2.5 2.497h-15a2.5 2.5 0 0 1-2.5-2.497V4.257c0-1.38 1.119-2.497 2.5-2.497h15Zm-1.25 11.862a1.248 1.248 0 1 0 0-2.498 1.248 1.248 0 1 0 0 2.498Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M.147.51h20V20.49h-20z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(WalletIcon);
export default ForwardRef;
