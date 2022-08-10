import React from 'react';

const getTribeImg = (ans, tribeID) => {
  ans = ans ? ans : 'u';
  let tribes = [null, 'tiger', 'hippo', 'elephant', 'dino', 'lion'];
  let answer = {
    o: 'O',
    x: 'X',
    '?': 'DUNNO',
    u: 'NORMAL',
  };

  return (
    <img src={`./tribes/${tribes[parseInt(tribeID)]}_${answer[ans]}.png`} />
  );
};

export default getTribeImg;
