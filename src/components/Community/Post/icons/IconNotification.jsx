const SCAFFOLD_BACKGROUND_COLOR = 'black';

export default function IconNotification({
  color = SCAFFOLD_BACKGROUND_COLOR,
  width = 20,
  height = 24,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.04622 2.8018C2.46713 4.27561 1.58002 6.27453 1.58002 8.35882V15.7146L0.496527 18.6516C0.25566 19.3045 0.738787 19.9977 1.43472 19.9977H18.5652C19.2611 19.9977 19.7442 19.3045 19.5034 18.6516L18.4204 15.7159V8.35882C18.4204 6.27453 17.5332 4.27561 15.9541 2.8018C14.3751 1.32798 12.2334 0.5 10.0002 0.5C7.76702 0.5 5.62531 1.32798 4.04622 2.8018ZM8.00513 21.5C7.45284 21.5 7.00513 21.9477 7.00513 22.5C7.00513 23.0523 7.45284 23.5 8.00513 23.5H12.0051C12.5574 23.5 13.0051 23.0523 13.0051 22.5C13.0051 21.9477 12.5574 21.5 12.0051 21.5H8.00513Z'
        fill={color}
      />
    </svg>
  );
}
