import React from 'react';
import styled from 'styled-components';
import IconLined from '../icons/OxIconLined';
import IconComment from '../icons/IconComment';
import buttonChat from '../img/buttonChat.png';
import oxoLogoimg from '../img/oxopolitics_letter_logo.png';

function TodayCards({ data }) {
  let dataArr = [];

  //json 데이터 배열에 저장하기
  for (const val in data) {
    dataArr.push(data[val]);
  }

  return (
    <>
      {dataArr.map((item) => (
        <StyledLi key={item.id} imgurl={item.photos} tmpImg={oxoLogoimg}>
          <div className='imgContainer'></div>
          <StyledBox className='box'>
            <p>{item.title}</p>
            <StyledBottom>
              <span className='iconBox'>
                <IconLined />
                <span>·{item.answers}</span>
                <IconComment />
                <span>·{item.comments}</span>
              </span>
              <img src={buttonChat} alt='임시' />
            </StyledBottom>
          </StyledBox>
        </StyledLi>
      ))}
    </>
  );
}

const StyledLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  width: 325px;
  height: 290px;
  overflow: hidden;
  .imgContainer {
    height: 131px;
    overflow: hidden;
    background-image: url(${(props) => props.imgurl || props.tmpImg});
    background-position-x: center;
    background-position-y: center;
    background-size: ${(props) => (props.imgurl ? 'cover' : 'contain')};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-repeat: no-repeat;
    background-color: #e6e6e6;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 18px;
  }
`;

const StyledBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 159px;
  padding: 15px 20px 20px;
  img {
    display: inline-block;
    height: 100%;
  }
`;

const StyledBottom = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 285px;

  .iconBox {
    color: #b0b0b0;
    height: 18px;
    svg {
      border-radius: 0;
    }
    span {
      margin-right: 10px;
      font-size: 14px;
    }
  }
  img {
    width: fit-content;
  }
`;

export default TodayCards;
