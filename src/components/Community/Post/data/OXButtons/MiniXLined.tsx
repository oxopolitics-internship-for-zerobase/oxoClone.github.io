export default function MiniXLined({
  innerColor = "none",
  outlineColor = "black",
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
      viewBox="0 0 19 18"
      fill={innerColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4549 1.99111C15.4091 0.930099 13.7135 0.930098 12.6677 1.99111L9.46877 5.23663L6.26975 1.99107C5.22396 0.930061 3.5284 0.93006 2.48261 1.99107C1.43682 3.05208 1.43682 4.77231 2.48261 5.83332L5.68162 9.07889L2.25309 12.5573C1.2073 13.6183 1.2073 15.3385 2.25309 16.3996C3.29889 17.4606 4.99445 17.4606 6.04024 16.3996L9.46877 12.9211L12.8973 16.3995C13.9431 17.4605 15.6386 17.4605 16.6844 16.3995C17.7302 15.3385 17.7302 13.6183 16.6844 12.5573L13.2559 9.07889L16.4549 5.83336C17.5007 4.77235 17.5007 3.05212 16.4549 1.99111Z"
        stroke={outlineColor}
        strokeWidth="2"
      />
    </svg>
  );
}
