import React from 'react';
import styled from 'styled-components';
import Group from './Group';
import group from './data/group.json';
import fetchJsonToArray from '../utils/fetchJsonToArray';

const GroupsContainer = (props) => {
  //! mock up
  // groupsArray = makeMockData(groupsArray);

  //Fetching Data
  const groupsArray = fetchJsonToArray(group);
  //! Test code
  // console.log(groupsArray);

  //sorting
  groupsArray.sort(
    (x, y) => y.lastGroupPostCreatedAt - x.lastGroupPostCreatedAt
  );

  //! Test code
  // console.log(groupsArray);

  return (
    <Container>
      <GroupsTitle>
        <h2>그룹</h2>
        <div>{'>'}</div>
      </GroupsTitle>
      <ListContainer>
        {groupsArray.map((elem, idx) => (
          <li key={elem.id}>
            <Group
              key={elem.id}
              title={elem.title}
              description={elem.description}
              imgLink={elem.photos}
              followers={randomFollowers()}
              lastGroupPostCreatedAt={elem.lastGroupPostCreatedAt}
            />
            {idx != props.length - 1 ? <HrLine /> : null}
          </li>
        ))}
      </ListContainer>
    </Container>
  );
};

function randomFollowers() {
  return Math.round(Math.random() * 200);
}

// const makeMockData = (array) => {
//   const mockData = [];
//   for (let i = 0; i < array.length; i++) {
//     mockData[i] = {
//       title: '그룹 이름 ' + i,
//       describtion:
//         '그룹에 대한 설명이 들어 있습니다. 사실 이건 꽤 긴 글입니다.',
//       imgLink: './src/assets/mock.jpg',
//       followers: Math.round(Math.random() * 200),
//       creationDate:
//         new Date() - Math.round(Math.random() * 60 * 24 * 11) * 60000,
//     };
//   }
//   return mockData;
// };

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
  li {
    list-style: none;
  }
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

  h2 {
    font-size: 18px !important;
    font-weight: 700;
  }
  div {
    font-size: 18px !important;
    font-weight: 500;
  }
`;

const HrLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background-color: rgb(230, 230, 230);
`;
