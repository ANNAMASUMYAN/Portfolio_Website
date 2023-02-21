import React from "react";
import styled from "styled-components";
import MainSection from "./MainSection";

const StyledHeroRightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    width: 100%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    width: 95%;
  }
`;
const HeroRightSideContainer = () => {
  return (
    <StyledHeroRightSideContainer>
      <MainSection />
    </StyledHeroRightSideContainer>
  );
};
export default HeroRightSideContainer;
