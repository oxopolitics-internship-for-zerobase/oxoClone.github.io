import React from 'react';
import Post from './Post/Post';
import Side from './Side/Side';
import './Community.css';

function Community(props) {
  return (
    <div className='container'>
      <h2>커뮤니티</h2>
      <div className={props.className}>
        <Post />
        <Side />
      </div>
    </div>
  );
}

export default Community;
