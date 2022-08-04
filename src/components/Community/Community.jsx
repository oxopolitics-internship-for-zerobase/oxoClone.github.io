import React from 'react';
import Post from './Post/Post';
import Side from './Side/Side';
import './Community.css';
import styled from 'styled-components';

function Community(props) {
  return (
    <main className='container'>
      <Header2>커뮤니티</Header2>
      <div className={props.className}>
        <Post />
        <Side />
      </div>
    </main>
  );
}

const Header2 = styled.h2`
  margin-bottom: 30px;
`

export default Community;
