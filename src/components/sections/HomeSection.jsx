import React from "react";
import styled from "styled-components";
import { $headerColor, $textColor } from "../const/const";
import { StyledProfession } from "../hero/MainSection";
import CV from "../../assets/files/my-cv.pdf";

export const StyledInnerMainSection = styled.div`
  height: 100%;
  width: 80%;
  margin-top: 3.13rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  @media screen and (min-width: 1100px) and (orientation: landscape) {
    margin-top: 0;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    margin-top: 0;
    height: 100%;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    margin-top: 0.5rem;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    margin: 0;
    width: 90%;
    margin-left: 2rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    width: 90%;
    height: 100%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    height: 90%;
    margin-left: 2%;
    width: 100%;
  }
`;
export const StyledAuthorNameBox = styled.div`
  display: flex;
  align-items: initial;
  justify-content: flex-start;
  @media screen and (max-width: 440px) and (orientation: portrait) {
    margin-top: 2%;
    width: 100%;
  }
`;
export const StyledAuthorName = styled.h1`
  display: flex;
  white-space: nowrap;
  align-items: space-between;
  font-size: 2.7rem;
  position: relative;
  right: 2.63rem;
  color: ${$headerColor};
  @media screen and (max-width: 520px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
  span {
    @media screen and (max-width: 520px) and (orientation: portrait) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 414px) and (orientation: portrait) {
      font-size: 1.8rem;
    }
  }
`;
const StyledAboutAuthor = styled.p`
  height: fit-content;
  font-size: 1rem;
  color: ${$textColor};
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    line-height: 2rem;
    width: 90%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    line-height: 1.8rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 912px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    width: 85%;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 1rem;
    width: 90%;
  }
  @media screen and (max-width: 540px) and (orientation: portrait) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    line-height: 1rem;
    width: 85%;
  }
  @media screen and (max-width: 320px) and (orientation: portrait) {
    line-height: 1rem;
  }
`;
const StyledGoToCV = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  border: 0.125rem solid ${$textColor};
  background: transparent;
  font-size: 0.9rem;
  padding: 0.31rem 1.56rem;
  margin-left: 0.3rem;
  opacity: unset !important;
  @media screen and (max-width: 1100px) and (orientation: landscape) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 0.5rem;
  }
  a {
    color: ${$headerColor};
    cursor: pointer !important;
  }
`;
const HomeSection = () => {
  return (
    <StyledInnerMainSection>
      <StyledAuthorNameBox>
        <StyledProfession liteProfession uppercase>
          Devops
        </StyledProfession>
        <StyledAuthorName>
          <span
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="500"
          >
            H
          </span>
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="800"
          >
            a
          </span>
          <span
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="1000"
          >
            y
          </span>
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="1200"
          >
            k
          </span>
          <span
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="1300"
          >
            &nbsp;S
          </span>
          <span
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="1500"
          >
            a
          </span>
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="1700"
          >
            r
          </span>
          <span
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="1900"
          >
            g
          </span>
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="2100"
          >
            s
          </span>
          <span
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="2300"
          >
            y
          </span>
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="2500"
          >
            a
          </span>
          <span
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-delay="2700"
          >
            n
          </span>
        </StyledAuthorName>
      </StyledAuthorNameBox>
      <StyledAboutAuthor
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-easing="linear"
        data-aos-delay="2700"
      >
        Achieved a being in Software Engineering. I am a good communicator and
        motivator, able to work as part of a team but also under my own
        initiative. I am a person who is self-motivated, energetic hardworking
        and reliable. My current work experience includes Cloud Native DevOps
        infrastructure migration. Monitoring, securing and taking part of the
        form in automating and supporting to ensure CI/CD in product
        development.
      </StyledAboutAuthor>
      <StyledGoToCV
        data-aos="fade-right"
        data-aos-delay="2000"
        data-aos-easing="ease-in-sine"
      >
        <a href={CV} download="Hayk Devops">
          Download CV
        </a>
      </StyledGoToCV>
    </StyledInnerMainSection>
  );
};
export default HomeSection;
