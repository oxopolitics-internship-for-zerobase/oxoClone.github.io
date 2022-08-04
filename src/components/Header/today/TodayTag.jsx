import React from 'react';
import styled from 'styled-components';
import json from './cards-1659489949.json';
import TodayCards from './TodayCards';

function TodayTag() {
  // console.log(json);
  return (
    <StyleTodayarticle>
      <h2>투데이</h2>
      <nav>
        <ul>
          <li>질문</li>
          <li>커뮤니티</li>
          <li>옥소퀴즈</li>
          <li>옥소편지</li>
        </ul>
      </nav>
      <RowFlexUl>
        <TodayCards data={json.data} />
      </RowFlexUl>
    </StyleTodayarticle>
  );
}

const StyleTodayarticle = styled.article`
  display: flex;

  flex-direction: column;
  width: 1025px;
  margin: 0 auto;
  h2 {
    margin-bottom: 30px;
  }
  nav {
    margin-bottom: 30px;
  }
  nav > ul {
    display: flex;
    font-size: 18px;
    height: 29px;
    gap: 45px;
  }
  li {
    list-style: none;
    font-weight: 600;
  }
`;
const RowFlexUl = styled.ul`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export default TodayTag;
