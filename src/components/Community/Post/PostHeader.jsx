import React from 'react';
import styled from 'styled-components';

function PostHeader() {
  const userName = '호랑호랑 호랑이';
  const date = 3;
  const view = 108;

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
