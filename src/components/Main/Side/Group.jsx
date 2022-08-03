import React from 'react';
import styled from 'styled-components';
// import GroupsContainer from './Group.style';

const Group = ({ title, describtion, creationDate, followers, imgLink }) => {
  const groupDescribtion =
    describtion.length > 14 ? describtion.slice(0, 13) + '...' : describtion;
  const dayString = getDateString(creationDate);

  return (
    <GroupsContainer>
      <img className='GroupImg' src={imgLink} alt='그룹 이미지' />
      <GroupInfoAria>
        <GroupTitle>{title}</GroupTitle>
        <GroupDescribtionAria>
          <GroupDescribtion>{groupDescribtion}</GroupDescribtion>
          <GroupEtcInfo>
            팔로워 {followers} · {dayString}
          </GroupEtcInfo>
        </GroupDescribtionAria>
      </GroupInfoAria>
    </GroupsContainer>
  );
};

const getDateString = (date) => {
  const now = new Date();
  const HOUR_MILLI_SEC = 3600 * 1000;
  const DAY_MILLI_SEC = 24 * HOUR_MILLI_SEC;

  const time = now - date;

  //switch 문?
  //! 계산을 미리 해서 범위만 비교 + return 처리 어디서?
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
    return `${thisDate.getFullYear()}.${
      thisDate.getMonth() + 1
    }.${thisDate.getDate()}`;
  }
  
};

//* Styled Components
// const GroupsContainer = styled.div`
//   display: flex;
//   -webkit-box-pack: start;
//   justify-content: flex-start;
//   align-items: flex-start;
//   width: 100%;
//   height: 70px;
//   cursor: pointer;
// `;

//! 배경이미지로 처리 고려
const GroupImg = styled.img`
  width: 90px;
  height: 70px;
  background-color: rgb(97, 97, 97);
  border-radius: 8px;
  background-position-x: center;
  background-position-y: center;
  -webkit-background-size: cover;
  background-size: cover;
`;

const GroupsContainer = styled.li`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 70px;
  cursor: pointer;

  img {
    width: 90px;
    height: 70px;
    background-color: rgb(97, 97, 97);
    border-radius: 8px;
    background-position-x: center;
    background-position-y: center;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;

const GroupInfoAria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 68px;
  margin-left: 10px;
  color: rgb(47, 47, 47);
`;

const GroupTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: rgb(47, 47, 47);
`;

const GroupDescribtionAria = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 12px;
  font-weight: 400;
`;

const GroupDescribtion = styled.span`
  height: 13px;
  margin-bottom: 3px;
  color: rgb(47, 47, 47);
`;
const GroupEtcInfo = styled.span`
  height: 13px;
  font-weight: 600;
  color: rgb(176, 176, 176);
`;

export default Group;
