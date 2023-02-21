import React from "react";
import styled from "styled-components";
import { $textColor } from "../const/const";
import HeroLeftSideContainer from "./HeroLeftSideContainer";
import HeroRightSideContainer from "./HeroRightSideContainer";

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  background: #1c1f35;
  border-radius: 2%;
  position: absolute;
  overflow: hidden;
  @media screen and (max-width: 414px) and (orientation: portrait) {
    height: 90%;
  }
`;
const StyledWrapperContent = styled.div`
  display: flex;
  width: 90%;
  height: 95%;
`;
const StyledUnderlineWord = styled.span`
  position: absolute;
  color: ${$textColor};
  right: -1%;
  bottom: -9%;
  text-align: center;
  opacity: 1 !important;
  font-size: 10rem;
  font-weight: 900;
  z-index: 0;
  @media only screen and (max-width: 1536px) and (orientation: landscape) {
    bottom: -12%;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    font-size: 9rem;
    bottom: -5%;
  }
  @media screen and (max-width: 992px) and (orientation: portrait) {
    font-size: 7.5rem;
    bottom: -4.5%;
  }
  @media screen and (max-width: 680px) and (orientation: portrait) {
    font-size: 6rem;
    bottom: -6%;
  }
  @media screen and (max-width: 560px) and (orientation: portrait) {
    font-size: 5rem;
    bottom: -5%;
  }
  @media screen and (max-width: 520px) and (orientation: portrait) {
    font-size: 4.5rem;
    bottom: -4%;
  }
  @media screen and (max-width: 440px) and (orientation: portrait) {
    font-size: 4rem;
    bottom: -3.4%;
  }
  @media screen and (max-width: 415px) and (orientation: portrait) {
    font-size: 3.3rem;
    bottom: -3%;
  }
`;
const HeroPage = (props) => {
  return (
    <HeroWrapper {...props}>
      <StyledWrapperContent>
        <HeroLeftSideContainer />
        <HeroRightSideContainer />
      </StyledWrapperContent>
      <StyledUnderlineWord>Welcome</StyledUnderlineWord>
    </HeroWrapper>
  );
};
export default HeroPage;
