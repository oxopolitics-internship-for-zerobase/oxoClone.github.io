import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function PostBody({ title, metaData }) {
  const description = metaData?.description;
  const photos = metaData?.photos[0];

  return (
    <Wrapper>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='description'>
        {description ? (
          description.includes('https://') ? (
            getLinkDescription(description)
          ) : (
            <p className='descriptionText'>{description}</p>
          )
        ) : null}

        <div className='moreView'>더 보기</div>
      </div>
      {photos && (
        <div className='photoWrapper'>
          <div className='photos'>
            <img src={photos} alt={description} />
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default PostBody;

// https:// 링크 + description
const getLinkDescription = (string) => {
  let [text, setText] = useState('');
  useEffect(() => {
    getLinkTitle(link).then((res) => setText(res));
  }, []);

  // link 주소
  let link = string.split('\n').filter((el) => el.includes('https://'))[0];
  // link 주소의 id
  let linkId = link.split('/')[link.split('/').length - 1];
  // link 주소의 출처
  let linkSource = link.replace('https://', '').split('/')[0];
  // link 주소 + \n을 제외한 description
  let description = string.replaceAll('\n', '').replaceAll(link, '');
  // link 미리보기 img
  let linkImg = `http://img.youtube.com/vi/${linkId}/mqdefault.jpg`;
  // link title

  return (
    <div className='linkDescription'>
      <div className='wrapper'>
        <span className='display'>
          <a href={link}>
            <div className='linkImg'>
              <img src={linkImg} />
            </div>
            <div className='linkInfo'>
              <header>
                <p>{text}</p>
              </header>
              <div>
                <p className='link'>{link}</p>
              </div>
              <footer className='linkSource'>
                <p>{linkSource}</p>
              </footer>
            </div>
          </a>
        </span>
      </div>
      <p className='descriptionText'>{description}</p>
    </div>
  );
};

// link title 가져오기
const getLinkTitle = async (link) => {
  const json = await (
    await fetch(`https://noembed.com/embed?dataType=json&url=${link}`)
  ).json();
  console.log(json.title);
  return json.title;
};

// CSS components
const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;

  /* --- Link Card  --- */
  .linkDescription .wrapper {
    margin-bottom: 15px;
  }
  .display {
    a {
      border: 1px solid rgb(225, 232, 237);
      display: grid;
      grid-template-columns: 150px 348px;
      height: 120px;
      width: 498px;
      overflow: hidden;
      box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px;
    }
  }

  .linkImg {
    background-color: #000;
    display: flex;
    align-items: center;
    border-radius: 0;

    img {
      display: block;
      border-radius: 0;
      width: 150px;
      object-fit: cover;
    }
  }

  .linkInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px;
  }

  .linkInfo header p {
    font-family: Arial, Helvetica, sans-serif !important;
    color: #000;
    font-weight: 600;
    font-size: 14px;
  }

  .linkSource {
    p {
      font-family: Arial, Helvetica, sans-serif !important;
      font-size: 15px;
      color: #949494;
      margin: 0;
    }
  }

  /* ----- */

  a {
    text-decoration: none;
  }

  .title p {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 15px;
  }

  .descriptionText {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.7em;
    white-space: pre-line;
  }
  .photoWrapper {
    display: flex;
    margin-top: 40px;
  }

  .photos {
    width: 100%;
    height: 300px;
    overflow: hidden;
    align-self: flex-end;

    display: flex;
    align-items: center;
  }

  .photos img {
    object-fit: cover;
    width: 100%;
  }

  .description .hide {
    display: hidden;
  }

  .moreView {
    color: #b0b0b0;
    cursor: pointer;

    align-self: flex-end;
  }

  .link {
    left: 0px;
    overflow: hidden;

    position: absolute;
    top: -500px;
    height: 1px;
  }
`;
