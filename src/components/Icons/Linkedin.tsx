import React from "react";
import { SvgProps } from "../../../types/types";

export default function Linkedin({ width, height, color }: SvgProps) {
  return (
    <svg
      height={height}
      width={width}
      id="Instagram"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="M1,51   c0,6.627,5.373,12,12,12h38c6.627,0,12-5.373,12-12V13c0-6.627-5.373-12-12-12H13C6.373,1,1,6.373,1,13V51z"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
        <path
          d="M7,46   c0,6.075,4.925,11,11,11h28c6.075,0,11-4.925,11-11V18c0-6.075-4.925-11-11-11H18C11.925,7,7,11.925,7,18V46z"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
        <circle
          cx="32"
          cy="32"
          r="16"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
        <circle
          cx="32"
          cy="32"
          r="11"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
        <circle
          cx="48"
          cy="15"
          r="3"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
        <path
          d="M26,32c0-3.314,2.686-6,6-6   "
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeMiterlimit: "10",
          }}
        />
      </g>
    </svg>
  );
}
