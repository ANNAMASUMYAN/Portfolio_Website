import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.div`
  display: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  position: "relative";
  z-index: "1000";
`;
const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 414px) {
    width: 90%;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Navbar />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
export default Header;
