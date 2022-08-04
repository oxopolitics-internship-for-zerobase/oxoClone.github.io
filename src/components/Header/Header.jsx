import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import BannerTag from './banner/BannerTag';
import TodayTag from './today/TodayTag';

function Header(props) {
  const [navState, setNavState] = useState('IconHome');

  const navHandler = (text) => {
    setNavState(text);
  };

  return (
    <>
      <Stylehaed className={props.className}>
        <HeaderLogo />
        <HeaderNav activeChange={navHandler} active={navState} />
        <HeaderSearch />
      </Stylehaed>
      <BannerTag />
      <TodayTag />
    </>
  );
}

const Stylehaed = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 50px;
  border-bottom: 1px solid #e6e6e6;
`;

export default Header;
