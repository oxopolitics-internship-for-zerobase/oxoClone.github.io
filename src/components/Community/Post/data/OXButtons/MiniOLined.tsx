import React from "react";

export default function MiniOLined({
  innerColor = "none",
  outlineColor = "#050505",
  width = 20,
  height = 20,
}: {
  innerColor?: string;
  outlineColor?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill={innerColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17.5C13.9183 17.5 17.5 13.9183 17.5 9.5C17.5 5.08172 13.9183 1.5 9.5 1.5C5.08172 1.5 1.5 5.08172 1.5 9.5C1.5 13.9183 5.08172 17.5 9.5 17.5Z"
        stroke={outlineColor}
        strokeWidth="2"
      />
    </svg>
  );
}
