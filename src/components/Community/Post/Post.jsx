import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import timelineJSON from './data/timeline.json';
import PostBody from './PostBody';
import PostComments from './PostComments';
import PostFooter from './PostFooter';

const postArray = fetchJsonToArray(timelineJSON);

function Post() {
  return (
    <article className='Post'>
      {postArray.map((el) => (
        <Wrapper key={el.id} className='post'>
          <PostHeader
            userModifier={el.createdByModifier}
            date={
              el.featuredOnNewsTimelineAt
                ? el.featuredOnNewsTimelineAt
                : el.featuredOnCommunityTimelineAt
            }
            view={el.view}
            tribeId={el.createdByTribeId}
          />
          <PostBody
            title={el.title}
            metaData={el.topicMetadataV2 ? el.topicMetadataV2 : el.postMetadata}

          />
          <PostComments postID = {el.id} commentsNum = {el.comments}/>
          <PostFooter answers={el.answers} user={el.createdBy} />
        </Wrapper>
      ))}
    </article>
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

  margin-bottom: 20px;
`;
