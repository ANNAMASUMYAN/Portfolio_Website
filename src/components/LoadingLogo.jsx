import React from "react";
import styled, { css } from "styled-components";

const StyledLoadingLogo = styled.div`
  ${(props) =>
    !props.isLoading &&
    css`
      z-index: 0 !important;
    `}
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0724;
  perspective: 31.25rem;
`;
const StyledLogoAnimate = styled.img`
  object-fit: contain;
  @keyframes rotateAnimation {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(1440deg);
    }
  }
  perspective: 31.25rem;
  object-fit: cover;
  transform: rotateY(0deg);
  animation: rotateAnimation 1.6s linear forwards;
  @media screen and (max-width: 320px) and (orientation: portrait) {
    width: 80%;
  }
`;
const LoadingLogo = (props) => {
  return (
    <StyledLoadingLogo {...props}>
      <StyledLogoAnimate
        src={require("./../assets/images/logo_5.webp")}
        alt="logo"
        height="initial"
        width="initial"
      ></StyledLogoAnimate>
    </StyledLoadingLogo>
  );
};
export default LoadingLogo;
