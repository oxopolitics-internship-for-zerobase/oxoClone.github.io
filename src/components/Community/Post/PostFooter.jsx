import React from 'react';
import styled from 'styled-components';
import OIcon from './data/OXButtons/MiniOLined';
import DunnoIcon from './data/OXButtons/MiniDunnoLined';
import XIcon from './data/OXButtons/MiniXLined';
import OXIcon from './icons/OxIconLined';

function PostFooter({ answers, user }) {
  switch (user) {
    case 'oxo':
      return (
        <OxoWrapper>
          <div className='wrapper'>
            <span className='oxIcons'>
              <OXIcon color='#616161' />
            </span>
            <div className='answers'>
              <span className='answersText'>{answers}</span>
            </div>
          </div>
        </OxoWrapper>
      );
    default:
      return (
        <Wrapper>
          <div className='oxButtons'>
            <button className='o'>
              <OIcon />
            </button>
            <button className='d'>
              <DunnoIcon />
            </button>
            <button className='x'>
              <XIcon />
            </button>
          </div>
          <div className='answers'>
            <span>응답 {answers}개 결과 보기&gt;</span>
          </div>
        </Wrapper>
      );
  }
}

export default PostFooter;

const OxoWrapper = styled.div`
  margin-top: 42px;

  .wrapper {
    display: flex;
    background-color: rgb(245, 245, 245);
    height: 30px;
    width: fit-content;
    border-radius: 10px;
    padding: 0 10px;

    .oxIcons {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #616161;
      svg {
        border-radius: initial;
        width: 25px;
        height: 12px;
      }
    }
  }

  .answers {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answersText {
    font-size: 12px;
    font-weight: 600;
    color: #616161;
    margin-left: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 42px;

  button {
    border: 0;
    border-radius: initial;
  }
  svg {
    border-radius: initial;
    path {
      stroke-width: 1.3;
    }
  }
  .oxButtons {
    width: 335px;
    height: 45px;
    display: flex;
    border-radius: 12px;
    overflow: hidden;

    .o,
    .x,
    .d {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  }

  .answers {
    display: flex;
    align-items: flex-end;
    span {
      font-size: 14px;
      color: #616161;
    }
  }
`;
