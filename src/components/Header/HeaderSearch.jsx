import React from 'react';
import styled from 'styled-components';
import CreateImg from './CreateImg';

function HeaderSearch() {
  return (
    <HeaderRightContainer>
      <CreateImg src={'IconSearch'} />
      <LoginButton>로그인</LoginButton>
    </HeaderRightContainer>
  );
}

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 161px;

  img {
    width: 16px;
    margin-right: 25px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  width: 120px;
  height: 45px;
  color: rgb(255, 255, 255);
  background-color: rgb(47, 47, 47);
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`;

export default HeaderSearch;
