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
          <li className='active'>
            질문
            <i className='newNotice' />
          </li>
          <li>
            커뮤니티
            <i className='newNotice' />
          </li>
          <li>
            옥소퀴즈
            <i className='newNotice' />
          </li>
          <li>
            옥소편지
            <i className='newNotice' />
          </li>
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
    font-weight: 600;
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
    position: relative;
    list-style: none;
    font-weight: 600;
    color: #b0b0b0;
  }
  .active {
    color: #2f2f2f;
    border-radius: 0;
    border-bottom: 2px solid #616161;
  }
  .newNotice {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: rgb(131, 172, 203);
    margin-left: 5px;
  }
`;
const RowFlexUl = styled.ul`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export default TodayTag;
