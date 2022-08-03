import React from 'react';
import styled from 'styled-components';
import PostHeader from "./PostHeader";

function Post() {
  return (
    <Wrapper className='post'>
      <PostHeader />
      <div className='row2'></div>
      <div className='row3'></div>
      <div className='row4'></div>
    </Wrapper>
  );
}

export default Post;

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  padding: 20px;
`;
