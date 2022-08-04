import React from 'react';
import styled from 'styled-components';
// 프로필 사진
import dino from './data/tribes/dino_portrait.png';
import elephant from './data/tribes/elephant_portrait.png';
import hippo from './data/tribes/hippo_portrait.png';
import lion from './data/tribes/lion_portrait.png';
import tiger from './data/tribes/tiger_portrait.png';
import oxo from './data/tribes/oxo_portrait.png';
// 아이콘
import ButtonKebab from '../icons/ButtonKebab.jsx';
import IconChat from '../icons/buttonChat.png';

const PostHeader = ({ userModifier = '', date, view, tribeId }) => {
  const profileImg = getProfileImg(tribeId)[0];
  const profileImgName = getProfileImg(tribeId)[1];
  const uploadedTime = getDateString(date);
  
  return (
    <PostWrapper>
      <div className='wrapper'>
        <div className='profile'>
          <img src={profileImg} alt={profileImgName} />
        </div>
        <div className='info'>
          <div>{`${userModifier} ${profileImgName}`}</div>
          <div className='wrapper'>
            <div>{uploadedTime}</div>
            <div>·</div>
            <div>조회 {view}</div>
          </div>
        </div>
        <div className='tok'>
          <div>
            <button className='tokIcon'>
              <img src={IconChat} alt='IconChat' />
            </button>
          </div>
        </div>
        <div className='more'>
          <ButtonKebab />
        </div>
      </div>
    </PostWrapper>
  );
};

export default PostHeader;

// Profile img 가져오기
const getProfileImg = (id) => {
  const img = [];

  switch (id) {
    // 호랑이
    case '1':
      img.push(tiger);
      img.push('호랑이');
      break;
    // 하마
    case '2':
      img.push(hippo);
      img.push('하마');
      break;
    // 코끼리
    case '3':
      img.push(elephant);
      img.push('코끼리');
      break;
    // 공룡
    case '4':
      img.push(dino);
      img.push('공룡');
      break;
    // 사자
    case '5':
      img.push(lion);
      img.push('사자');
      break;
    // 옥소
    default:
      img.push(oxo);
      img.push('옥소');
      break;
  }
  return img;
};

// 글 업로드 시간 string 반환
const getDateString = (date) => {
  const now = new Date();
  const HOUR_MILLI_SEC = 3600 * 1000;
  const DAY_MILLI_SEC = 24 * HOUR_MILLI_SEC;

  const time = now - date;

  if (time / HOUR_MILLI_SEC < 1) {
    return `${Math.round((time / HOUR_MILLI_SEC) * 60)}분 전`;
  } else if (time / DAY_MILLI_SEC < 1) {
    return `${Math.round(time / HOUR_MILLI_SEC)}시간 전`;
  } else if (time / DAY_MILLI_SEC < 7) {
    return `${Math.round(time / DAY_MILLI_SEC)}일 전`;
  } else if (time / DAY_MILLI_SEC < 10) {
    return '1주 전';
  } else {
    const thisDate = new Date(date);
    console.log(thisDate)
    return `${thisDate.getFullYear()}.${
      thisDate.getMonth() + 1
    }.${thisDate.getDate()}`;
  }
};

// CSS Component
const PostWrapper = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 47px 545px 32px 43px;
  }

  .profile {
    img {
      position: absolute;
      left: 0%;
      top: 0%;
      width: 40px;
      height: 40px;
    }
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #efefef;

    overflow: hidden;
  }

  .info {
    font-weight: 600;
    /* line-height: 120%; */
    color: rgb(47, 47, 47);
    .wrapper {
      font-size: 12px;
      font-weight: 400;
      color: rgb(176, 176, 176);
    }
  }

  .tokIcon {
    border: none;
    width: 32px;
    height: 32px;
    img {
      width: inherit;
      height: inherit;
      display: block;
    }
  }

  .more {
    width: 43px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info .wrapper {
    display: flex;
    flex-direction: row;
  }
`;
