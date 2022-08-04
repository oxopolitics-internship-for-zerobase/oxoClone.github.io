import React from 'react';
import styled from 'styled-components';

const Group = ({
  title,
  description,
  lastGroupPostCreatedAt,
  followers,
  imgLink,
}) => {
  const groupdescription =
    description.length > 14 ? description.slice(0, 13) + '...' : description;
  const dayString = getDateString(lastGroupPostCreatedAt);

  return (
    <GroupContainer imgUrl={imgLink}>
      <div className='groupImg' />
      <div className='groupInfoAria'>
        <div className='groupTitle'>{title}</div>
        <div className='groupDescriptionAria'>
          <div className='groupDescription'>{groupdescription}</div>
          <div className='groupEtcInfo'>
            팔로워 {followers} · {dayString}
          </div>
        </div>
      </div>
    </GroupContainer>
  );
};

const getDateString = (date) => {
  const now = new Date();
  const HOUR_MILLI_SEC = 3600 * 1000;

  const time = now - date;

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

//* Styled Components

const GroupContainer = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 70px;
  cursor: pointer;

  .groupImg {
    width: 90px;
    height: 70px;
    background-color: rgb(97, 97, 97);
    border-radius: 8px;
    background-image: url(${(props) => props.imgUrl});
    background-position-x: center;
    background-position-y: center;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .groupInfoAria {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 68px;
    margin-left: 10px;
    color: rgb(47, 47, 47);
  }

  .groupTitle {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: rgb(47, 47, 47);
  }

  .groupDescriptionAria {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 12px;
    font-weight: 400;
  }

  .groupDescription {
    height: 13px;
    margin-bottom: 3px;
    color: rgb(47, 47, 47);
  }

  .groupEtcInfo {
    height: 13px;
    font-weight: 600;
    color: rgb(176, 176, 176);
  }
`;

export default Group;
