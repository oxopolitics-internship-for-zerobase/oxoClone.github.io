import React from 'react';
import styled from 'styled-components';
import getTribeImg from './data/tribes/getTribeImg';

const Comment = ({ answer, comment, userTribeId }) => {
  const commentText =
    comment.length > 55 ? comment.slice(0, 54) + '...' : comment;
  return (
    <Container>
      <div className='tribeImg'>{getTribeImg(answer, userTribeId)}</div>
      <div className='commentText'>{commentText}</div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  margin-bottom: 12px;
  
  .tribeImg {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    
    img {
      position: absolute;
      border: none;
      overflow: hidden;
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
  }
  .commentText {
    font-size: 14px;
    padding: 2px 10px;
    color: rgb(47, 47, 47);
    overflow: hidden;
  }
`;
