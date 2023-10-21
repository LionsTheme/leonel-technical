import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8Zm0 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Zm0-9.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 11h-1V7.5c0-.275-.225-.5-.5-.5H7c-.275 0-.5.225-.5.5s.225.5.5.5h.5v3h-1c-.275 0-.5.225-.5.5s.225.5.5.5h3a.5.5 0 0 0 0-1Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(InfoIcon);
export default ForwardRef;
