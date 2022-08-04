const OXO_GRAY600 = 'black';

export default function QuizFinishedIcon({
  color = OXO_GRAY600,
  width = 12,
  height = 8,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.5871 0.147911C11.7824 0.343174 11.7824 0.659756 11.5871 0.855018L4.5897 7.85242C4.49593 7.94619 4.36875 7.99887 4.23614 7.99887C4.10354 7.99887 3.97636 7.94619 3.88259 7.85242L0.412804 4.38264C0.217542 4.18737 0.217542 3.87079 0.412804 3.67553C0.608066 3.48027 0.924649 3.48027 1.11991 3.67553L4.23614 6.79176L10.88 0.147911C11.0753 -0.0473507 11.3918 -0.0473507 11.5871 0.147911Z'
        fill={color}
      />
    </svg>
  );
}
