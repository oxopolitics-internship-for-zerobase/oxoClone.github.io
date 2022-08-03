import React from 'react';
import styled from 'styled-components';
import CreateImg from './CreateImg';

const Nav = styled.nav`
  display: inline-flex;
  width: 320px;
  justify-content: space-around;
  align-items: center;
`;

function HeaderNav() {
  return (
    <Nav>
      <CreateImg src={'IconHome'} />
      <CreateImg src={'IconPoldi'} />
      <CreateImg src={'IconChat'} />
      <CreateImg src={'IconNotification'} />
    </Nav>
  );
}

export default HeaderNav;
