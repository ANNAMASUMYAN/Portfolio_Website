import React from "react";
import { StyledInnerMainSection } from "./HomeSection";
import styled, { css } from "styled-components";
import { $headerColor, $textColor, DATA } from "../const/const";

const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    padding: 5rem 0 0 0.7rem;
  }
  @media screen and (max-width: 1536px) and (orientation: landscape) {
    padding-top: 3rem;
  }
  @media screen and (max-width: 1100px) and (orientation: landscape) {
    padding: 0 0 0 0.7rem;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    padding: 1rem 0 0 0.7rem;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    padding: 4rem 0 0 0.7rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    width: 95%;
    padding: 0;
  }
  @media screen and (max-width: 560px) and (orientation: portrait) {
    width: 90%;
    padding: 3rem 0 0 0.7rem;
  }
  @media screen and (max-width: 520px) and (orientation: portrait) {
    width: 90%;
    padding: 4rem 0 0 0.7rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    height: fit-content;
    padding: 2rem 0 0 0.7rem;
  }
  @media screen and (max-width: 390px) and (orientation: portrait) {
    height: fit-content;
    padding: 2rem 0 0 0.7rem;
  }
  @media screen and (max-width: 390px) and (orientation: portrait) {
    padding: 5rem 0 0 0.7rem;
  }
`;
const StyledTechnoHeader = styled.h1`
  color: ${$headerColor};
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    justify-content: flex-start;
    font-size: 3rem;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    top: 0.5rem;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 2rem;
    top: 0;
  }
  @media screen and (max-width: 560px) and (orientation: portrait) {
    line-height: 2rem;
  }
  @media screen and (max-width: 540px) and (max-height: 720px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
`;
const StyledTechnoText = styled.p`
  color: ${$textColor};
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 1rem;
    width: 100%;
    margin-top: 0;
  }
  @media screen and (max-width: 560px) and (orientation: portrait) {
    font-size: 0.8rem;
    top: 0;
  }
  @media screen and (max-width: 540px) and (max-height: 720px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    line-height: 1.3rem;
    font-size: 0.8rem;
    width: 90%;
  }
`;
const StyledLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  html:not(&) {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }
  body:not(&) {
    font: 1rem / 1.618 Arial, Verdana, sans-serif;
  }
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    height: 90%;
  }
  @media screen and (max-width: 1280px) and (orientation: landscape) {
    height: 100%;
  }
  @media screen and (max-width: 912px) and (orientation: landscape) {
    height: 90%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 912px) and (orientation: portrait) {
    height: 90%;
    margin-top: 0;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    justify-content: center;
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 768px) and (max-height: 1024px) {
    height: 80%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    justify-content: center;
    width: 90%;
    height: 50%;
  }
  @media screen and (max-width: 540px) and (max-height: 720px) {
    justify-content: center;
    width: inherit;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    width: 95%;
    margin-top: 1rem;
  }
`;
const StyledGridContainer = styled.div`
  display: grid;
  width: inherit;
  height: 100%;
  grid-template-columns: repeat(50%, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 50%);
    margin-top: 2rem;
    height: 85%;
  }
  @media screen and (max-width: 1536px) and (orientation: landscape) {
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 50%);
    margin-top: 0;
  }
  @media screen and (max-width: 1280px) and (orientation: landscape) {
    margin-top: 2%;
  }
  @media screen and (max-width: 1100px) and (orientation: landscape) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 50%);
    height: 100%;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 33%);
    height: 100%;
    gap: 1rem;
  }
  @media screen and (max-width: 912px) and (orientation: portrait) {
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 50%);
    height: 80%;
    margin: 0;
    width: 90%;
    gap: 0.5rem;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    height: 100%;
    width: 95%;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    margin-top: 0;
    height: 90%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    margin-top: 0;
    width: 100%;
  }
  @media screen and (max-width: 560px) and (orientation: portrait) {
    grid-template-rows: repeat(3, 33%);
    grid-template-columns: repeat(2, 50%);
    height: 85%;
    gap: 1rem;
  }
  @media screen and (max-width: 520px) and (orientation: portrait) {
    width: 90%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    padding-top: 0;
  }
  @media screen and (max-width: 540px) and (max-height: 720px) {
    height: 90%;
    gap: 0.5rem;
  }
`;
const StyledGridRow = styled.div`
  flex-wrap: wrap;
`;
const StyledGridColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1100px) and (orientation: landscape) {
    height: fit-content;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    margin: 0 6rem 0 0;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    width: 100%;
    margin: 0;
  }
`;
const StyledCard = styled.article`
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 100%;
  cursor: pointer;
  perspective: 62.5rem;
  transition: all 0.25s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
  }
  &.flipped {
    & > div:first-of-type {
      transform: perspective(62.5rem) rotateY(-180deg);
    }
    & > div:last-of-type {
      transform: perspective(62.5rem) rotateY(0deg);
    }
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    margin: 0;
    gap: 1rem;
  }
`;
const CardSide = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    z-index: 100;
  }
  @media screen and (max-width: 540px) and (orientation: portrait) {
    width: 100%;
  }
`;
const StyledCardFront = styled.div`
  ${CardSide};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
`;
const StyledCardBack = styled.div`
  ${CardSide};
  transform: rotateY(-180deg);
`;
const StyledCardTitle = styled.h2`
  color: ${$headerColor};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${$textColor};
  }
  &:after {
    content: "";
    display: block;
    width: 0%;
    border-bottom: 0.13rem solid #fff;
    transition: all 0.8s ease;
  }
  &:hover::after {
    border-bottom: 0.13rem solid ${$textColor};
    width: 100%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 0.8rem;
  }
`;
const StyledCardDescription = styled.span`
  font-size: 0.63rem;
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 0.53rem;
    white-space: nowrap;
  }
`;
const TechnologiesSection = () => {
  const flipCard = (event) => {
    event.currentTarget.classList.toggle("flipped");
  };
  return (
    <>
      <StyledInnerMainSection>
        <StyledTopContainer>
          <StyledTechnoHeader>Cloud Native DevOps Skills</StyledTechnoHeader>
          <StyledTechnoText>
            I enjoy collaborating with developers, businesses and operations. I
            have improved on and developed new skills throughout the year and
            ensured I am up-to-date with the current key trends within the
            industry.
          </StyledTechnoText>
        </StyledTopContainer>
        <StyledLayoutWrapper>
          <StyledGridContainer>
            {DATA.map((data) => (
              <StyledGridRow key={data.id}>
                <StyledGridColumn>
                  <StyledCard onClick={flipCard}>
                    <StyledCardFront key={data.id}>
                      <StyledCardTitle>{data.category}</StyledCardTitle>
                    </StyledCardFront>

                    <StyledCardBack>
                      <StyledCardDescription>
                        <ul>
                          {data.items.map((item, index) => (
                            <li
                              key={item.name}
                              style={{
                                paddingLeft: `${5 * (index + 1)}px`,
                                listStyle: "none",
                              }}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </StyledCardDescription>
                    </StyledCardBack>
                  </StyledCard>
                </StyledGridColumn>
              </StyledGridRow>
            ))}
          </StyledGridContainer>
        </StyledLayoutWrapper>
      </StyledInnerMainSection>
    </>
  );
};
export default TechnologiesSection;
