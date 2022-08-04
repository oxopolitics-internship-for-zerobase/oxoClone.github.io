import React from 'react';
import styled from 'styled-components';
import dino from './data/tribes/dino_NORMAL.png';
import elephant from './data/tribes/elephant_NORMAL.png';
import hippo from './data/tribes/hippo_NORMAL.png';
import lion from './data/tribes/lion_NORMAL.png';
import tiger from './data/tribes/tiger_NORMAL.png';

const getProfileImg = (name) => {
  
}

const PostHeader =({
  userName, date = 0, view
}) => {
  console.log(userName, date, view)
  return (
    <PostWrapper>
      <div className='wrapper'>
        <div className='profile'>
          <div className='profileImg'></div>
        </div>
        <div className='info'>
          <div>{userName}</div>
          <div className='wrapper'>
            <div>{date}시간 전</div>
            <div>·</div>
            <div>조회 {view}</div>
          </div>
        </div>
        <div className='tok'>
          <div className='tokIcon'></div>
        </div>
        <div className='more'>
          <div className='moreIcon'></div>
        </div>
      </div>
    </PostWrapper>
  );
}

export default PostHeader;

const PostWrapper = styled.div`
    .wrapper{
        display: grid;
        grid-template-columns: 40px 552px 32px 43px;
    }

  .profileImg,
  .tokIcon,
  .moreIcon {
    width: 40px;
    height: 40px;
    background-color: black;

    border-radius: 50%;
  }

  .info .wrapper {
    display: flex;
    flex-direction: row;
  }
`;
