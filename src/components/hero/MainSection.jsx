import React from "react";
import styled, { css } from "styled-components";
import StyledSwiperBlock from "./StyledSwiperBlock";
import HERO from "../../assets/images/Hayk_vector5.webp";
import { $textColor } from "../const/const";

const StyledMainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  @media screen and (max-width: 1280px) and (orientation: landscape) {
    height: 80%;
  }
  @media screen and (max-width: 1100px) and (orientation: landscape) {
    height: 85%;
  }
`;
const StyledImageWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: rgb(40, 44, 67, 2.5);
  background-image: radial-gradient(circle, #5e5252, #2c3141, #10132d);
  border: 1rem solid #181b31;
  align-items: center;
  justify-content: center;
  right: -40%;
  border-radius: 50%;
  height: 130%;
  width: 75%;
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    right: -80%;
    width: 140%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    right: -130%;
    width: 200%;
  }
`;
const StyledAvatarImage = styled.img`
  aspect-ratio: 1/1;
  opacity: 0.3;
  object-fit: contain;
  display: block;
`;
export const StyledProfession = styled.sub`
  font-size: 0.6rem;
  animation-duration: 1s;
  animation-delay: 2.1s;
  white-space: nowrap;
  animation-fill-mode: forwards;
  color: ${$textColor};
  ${(props) =>
    props.uppercase &&
    css`
      position: relative;
      text-transform: uppercase;
      width: auto;
      display: flex;
      align-items: baseline;
      right: 1rem;
    `}
  ${(props) =>
    props.fullProfession &&
    css`
      @keyframes from-left-full-profession-side {
        from {
          opacity: 0;
          transform: translateX(-100%);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotate(-90deg);
        }
      }
      transform: translateX(-122%);
      animation-name: from-left-full-profession-side;
      animation-duration: 1s;
    `}
    ${(props) =>
    props.liteProfession &&
    css`
      @keyframes from-left-lite-profession-side {
        from {
          transform: rotate(0deg) translateY(-259%);
        }
        to {
          transform: rotate(-90deg) translateY(0);
        }
      }
      animation-name: from-left-lite-profession-side;
      transform: rotate(0deg) translateY(-259%);
    `}
`;
const MainSection = () => {
  return (
    <StyledMainSection>
      <StyledSwiperBlock />
      <StyledImageWrapper
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="2700"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <StyledAvatarImage src={HERO} alt="avatar" height="100%" width="100%" />
      </StyledImageWrapper>
    </StyledMainSection>
  );
};
export default MainSection;
