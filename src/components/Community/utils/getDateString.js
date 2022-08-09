const getDateString = (date) => {
  const now = new Date();
  const HOUR_MILLI_SEC = 3600 * 1000;

  let time = now - date;

  time /= HOUR_MILLI_SEC;
  if (time < 1) {
    return `${Math.round(time * 60)}분 전`;
  } else if (time < 23.5) {
    return `${Math.round(time)}시간 전`;
  } else if (time < 7 * 24 - 0.5) {
    return `${Math.round(time / 24)}일 전`;
  } else if (time < 24 * 10) {
    return '1주 전';
  } else {
    const thisDate = new Date(date);
    return `${thisDate.getFullYear()}.${
      thisDate.getMonth() + 1
    }.${thisDate.getDate()}`;
  }
};

export default getDateString;
