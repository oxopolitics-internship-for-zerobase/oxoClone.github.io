import React from 'react';
import styled from 'styled-components';

function PostBody({ title, metaData }) {
  const description = metaData?.description;
  const photos = metaData?.photos[0];

  console.log(photos);
  return (
    <Wrapper>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='description'>
        {description && <p>{description}</p>}
        <div className='moreView'>더 보기</div>
        {photos && (
          <div className='photos'>
            <span>
              <img src={photos} alt={description} />
            </span>
            
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default PostBody;

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  .title p {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  .description p {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.7em;
    white-space: pre-line;
  }
  
  .description .photos {
    margin-bottom: 15px;
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .description span{
    display: block;
    height: 300px;
  }

  .description img{
    object-fit: cover;
    width: 100%;
  }

  .description .hide {
    display: hidden;
  }

  .moreView {
    color: #b0b0b0;
    cursor: pointer;
  }
`;
