import React from 'react';
import bestCommentIds from './data/bestCommentIds.json';
import commentsJson from './data/comments.json';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsArea = ({ postID }) => {
  const bests = bestCommentIds.data[postID];
  const comments = commentsJson.data;
  const commentsArr = [];
  const bestsArr = [];

  for (const key in bests) {
    commentsArr.push(comments[bests[key]]);
  }
  // console.log(commentsArr);

  return (
    <Container>
      {commentsArr.map((elem, idx) => (
        <Comment
          key={idx}
          answer={elem.answer}
          comment={elem.comment}
          userTribeId={elem.userTribeId}
        />
      ))}
    </Container>
  );
};

export default CommentsArea;

const Container = styled.div`
  margin-top: 15px;
`;
