import React from 'react';
import styled from 'styled-components';
import Group from './Group';

const GroupsContainer = (props) => {
  let groupsArray = new Array(parseInt(props.length) || 20);

  //! mock up
  groupsArray = makeMockData(groupsArray);

  //sorting
  groupsArray.sort((x, y) => y.creationDate - x.creationDate);

  //! Test code
  // console.log(groupsArray);

  return (
    <Container>
      <GroupsTitle>
        <h2 style={{ fontSize: '18px', fontWeight: 700 }}>그룹</h2>
        <img src='./src/assets/arrow.jpg'></img>
      </GroupsTitle>
      <ListContainer>
        {groupsArray.map((elem, idx) => {
          return (
            <>
              <Group
                title={elem.title}
                describtion={elem.describtion}
                imgLink={elem.imgLink}
                followers={elem.followers}
                creationDate={elem.creationDate}
                key={elem.title}
              />
              {idx != props.length - 1 ? <HrLine /> : null}
            </>
          );
        })}
      </ListContainer>
    </Container>
  );
};

const makeMockData = (array) => {
  const mockData = [];
  for (let i = 0; i < array.length; i++) {
    mockData[i] = {
      title: '그룹 이름 ' + i,
      describtion:
        '그룹에 대한 설명이 들어 있습니다. 사실 이건 꽤 긴 글입니다.',
      imgLink: './src/assets/mock.jpg',
      followers: Math.round(Math.random() * 200),
      creationDate:
        new Date() - Math.round(Math.random() * 60 * 24 * 11) * 60000,
    };
  }
  return mockData;
};

export default GroupsContainer;

//********** Styled Components **********
const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  width: 290px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 25px 20px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const GroupsTitle = styled.a`
  height: 24px;
  width: 100%;
  margin-bottom: 36px;
  color: #2f2f2f;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const HrLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background-color: rgb(230, 230, 230);
`;
