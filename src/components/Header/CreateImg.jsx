import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 0;
`;

function CreateImg({ src }) {
  const imgsrc = `/src/components/Header/img/${src}.svg`;

  return (
    <a href='/'>
      <StyledImg src={imgsrc} alt={`${src} 이미지`} />
    </a>
  );
}

export default CreateImg;
