import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const ChevronDownIcon = (
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
        d="M8.897 16.25c-.32 0-.64-.122-.883-.366l-7.5-7.5A1.25 1.25 0 1 1 2.28 6.616l6.616 6.618 6.618-6.617a1.25 1.25 0 1 1 1.767 1.768l-7.5 7.5a1.246 1.246 0 0 1-.885.365Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M.147 0h17.5v20H.147z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChevronDownIcon);
export default ForwardRef;
