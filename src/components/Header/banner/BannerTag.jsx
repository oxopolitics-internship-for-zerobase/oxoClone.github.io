import React from 'react';
import styled from 'styled-components';
import json from './banner.json';

function BannerTag() {
  // console.log(json);
  const imgUrl = json.data.imageUrl;
  return (
    <StyleSection backgroundColor={json.data.backgroundColor}>
      <TextContainer>
        <StyleText color={json.data.text1Color}>{json.data.text1}</StyleText>
        <StyleText color={json.data.text2Color}>{json.data.text2}</StyleText>
      </TextContainer>
      <StyleImg src={imgUrl} alt='배너이미지' />
    </StyleSection>
  );
}
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 130px;
`;
const StyleText = styled.p`
  color: ${(props) => props.color || 'black'};
  font-size: 24px;
`;

const StyleSection = styled.section`
  margin: 0 auto;
  padding: 0 30px;
  width: 1025px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 50px;
  background-color: ${(props) => props.backgroundColor || 'skyblue'};
`;

const StyleImg = styled.img``;
export default BannerTag;
