import React from 'react';
import CommentsHeader from './CommentsHeader';
import CommentsArea from './CommentsArea';
import styled from 'styled-components';

function PostComments({ postID, commentsNum }) {
  return (
    <Container>
      <CommentsHeader commentsNum={commentsNum} />
      {commentsNum > 0 ? <CommentsArea postID={postID} /> : null}
    </Container>
  );
}

export default PostComments;

const Container = styled.div`
  margin-top: 25px;
`;
