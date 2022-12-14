export default function MiniDunnoLined({
  innerColor = "none",
  outlineColor = "#050505",
  width = 21,
  height = 18,
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
      viewBox="0 0 21 18"
      fill={innerColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.21765 2.48148C9.3581 0.506172 12.2092 0.506174 13.3497 2.48148L19.1659 12.5556C20.3064 14.5309 18.8808 17 16.5999 17H4.96738C2.68649 17 1.26094 14.5309 2.40138 12.5556L8.21765 2.48148Z"
        stroke={outlineColor}
        strokeWidth="2"
      />
    </svg>
  );
}
