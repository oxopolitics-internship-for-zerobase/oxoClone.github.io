import React from 'react';
import Community from './Community/Community';
import Side from './Side/Side';
import './Main.css';

function Main(props) {
  return (
    <div className='container'>
      <h2>커뮤니티</h2>
      <div className={props.className}>
        <Community />
        <Side />
      </div>
    </div>
  );
}

export default Main;
