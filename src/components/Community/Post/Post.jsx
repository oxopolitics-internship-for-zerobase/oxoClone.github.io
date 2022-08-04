import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import timelineJSON from './data/timeline.json';

const postArray = fetchJsonToArray(timelineJSON);

function Post() {
  return (
    <div className='Post'>
      {postArray.map((el) => (
        <Wrapper key={el.id} className='post'>
          <PostHeader
            userModifier={el.createdByModifier}
            userName={el.createdBy}
            view={el.view}
            tribeId={el.createdByTribeId}
          />
          <div className='row2'></div>
          <div className='row3'></div>
          <div className='row4'></div>
        </Wrapper>
      ))}
    </div>
  );
}

export default Post;

function fetchJsonToArray(rawJson) {
  const array = [];
  const jsonData = rawJson.data;
  for (const key in jsonData) {
    jsonData[key] = { ...jsonData[key] };
    array.push(jsonData[key]);
  }
  return array;
}

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  padding: 20px;
`;
