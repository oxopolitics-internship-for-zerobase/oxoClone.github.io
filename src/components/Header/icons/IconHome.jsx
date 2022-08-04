const SCAFFOLD_BACKGROUND_COLOR = '#e6e6e6';

export default function IconHome({
  color = SCAFFOLD_BACKGROUND_COLOR,
  width = 24,
  height = 24,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.8741 7.67896C21.5857 8.24828 22 9.11022 22 10.0216V19.5784C22 21.2353 20.6569 22.5784 19 22.5784H13V15.5797C13 15.0274 12.5523 14.5797 12 14.5797C11.4477 14.5797 11 15.0274 11 15.5797V22.5784H5C3.34315 22.5784 2 21.2353 2 19.5784V10.0216C2 9.11022 2.41427 8.24828 3.12592 7.67896L10.1259 2.07896C11.2216 1.20244 12.7784 1.20244 13.8741 2.07896L20.8741 7.67896Z'
        fill={color}
      />
    </svg>
  );
}
