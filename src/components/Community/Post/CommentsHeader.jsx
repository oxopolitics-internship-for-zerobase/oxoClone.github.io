import React from 'react';
import styled from 'styled-components';

const CommentsHeader = ({ commentsNum }) => {
  return (
    <Header onClick={() => alert(`댓글 ${commentsNum}개`)}>
      댓글 {commentsNum}
      {' >'}
    </Header>
  );
};

const Header = styled.span`
  font-size: 14px;
  color: #616161;
  margin-right: 2px;
  font-weight: 300;

  cursor: pointer;
`;

export default CommentsHeader;
