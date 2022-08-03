import React from 'react';
import styled from 'styled-components';
import menubar from './img/menu.svg';
import Logo from './img/oxopolitics_letter_logo.png';

const SytledSpan = styled.span`
  display: flex;
  align-items: center;
  width: 161px;

  img {
    width: 100%;
    border-radius: 0;
  }
  .menubar {
    /* width: 100%; */
  }
  .oxoLogo {
    margin-left: 20px;
    width: 123px;
    height: initial;
    max-width: 100%;
    object-fit: contain;
  }
`;

function HeaderLogo() {
  return (
    <SytledSpan>
      <img className='menubar' src={menubar} />
      <img className='oxoLogo' src={Logo} />
    </SytledSpan>
  );
}

export default HeaderLogo;
