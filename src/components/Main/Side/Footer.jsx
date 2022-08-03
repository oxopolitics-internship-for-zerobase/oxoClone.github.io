import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <CompanyName>(주)옥소폴리틱스</CompanyName>
      <CompanyInfo>
        대표 : 유호현 | 사업자등록번호 : 584-87-01911 | 대표전화 : 1533-5487 |
        개인정보보호책임자 : 박마가 | 
        <br />
        대표 메일 주소 : contact@oxopolitics.com
        <br />
        회사주소 : 서울 강남구 양재대로41길 11, 지층 102호(일원동)
        <a href="#">개인정보처리방침</a>
        {" | "}
        <a href="#">서비스이용약관</a>
      </CompanyInfo>
    </Container>
  );
};

//* Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
`;
const CompanyName = styled.h2`
  font-weight: 600;
  font-size: 12px !important;
  line-height: 100%;
  color: #616161;
`;
const CompanyInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;
  text-align: left;
  color: #616161;
`;

export default Footer;
