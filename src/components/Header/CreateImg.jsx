import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 0;
`;

function CreateImg({ src }) {
  const imgsrc = `/src/components/Header/img/${src}.svg`;

  return <StyledImg src={imgsrc} alt={`${src}`} />;
}

export default CreateImg;
