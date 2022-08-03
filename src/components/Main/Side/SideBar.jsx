import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import GroupsContainer from "./GroupsContainer";

function SideBar() {
  return (
    <SideBarContainer>
      <GroupsContainer length="20"/>
      <Footer />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.aside`
  width: 290px;
`;
