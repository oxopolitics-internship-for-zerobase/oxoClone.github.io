import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateImg from './CreateImg';
import IconHome from './icons/IconHome';
import IconPoldi from './icons/IconPoldi';

const Nav = styled.nav`
  display: flex;
  width: 320px;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
  }
  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    width: 58px;
    list-style: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    svg {
      border-radius: 0;
      margin-right: 10px;
    }
    span {
      display: none;
    }
  }
  .active {
    width: 90px;
    height: 40px;
    background-color: #2f2f2f;
    transition: 0.4s;
  }
  .active span {
    display: inline-block;
    color: #ffffff;
  }
`;

function HeaderNav({ active, activeChange }) {
  let color = '#e6e6e6';

  const navHandler = (e) => {
    const el = e.target.closest('li');
    const navText = e.target.closest('li').classList.contains('active');
    if (!navText) {
      const prevActive = document.querySelector('.active');
      prevActive.classList.remove('active');
      el.classList.add('active');
    }
  };

  useEffect(() => {
    const activeList = document.querySelector(`.${active}`);
    const activeSvg = activeList.querySelector('path');
    activeList.classList.add('active');
    activeSvg.setAttribute('fill', '#ffffff');
    // console.log(activeSvg.getAttribute('fill'));
  }, []);

  return (
    <Nav active={active}>
      <ul onClick={navHandler}>
        <li className='IconHome'>
          <IconHome color={color} />
          <span>홈</span>
        </li>
        <li className='IconPoldi'>
          <IconPoldi color={color} /> <span>폴디</span>
        </li>
        <li className='IconChat'>
          <CreateImg src={'IconChat'} /> <span>톡</span>
        </li>
        {/* <li className='notice'>
          <CreateImg src={'IconNotification'} /> <span>알림</span>
        </li> */}
      </ul>
    </Nav>
  );
}

export default HeaderNav;
