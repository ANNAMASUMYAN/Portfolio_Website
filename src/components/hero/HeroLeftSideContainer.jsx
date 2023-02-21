import React from "react";
import styled, { css } from "styled-components";
import { Mail } from "@styled-icons/entypo/Mail";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { StyledProfession } from "./MainSection";
import { Github } from "@styled-icons/boxicons-logos/Github";
import LOGO from "./../../assets/images/logo_5.webp";
import { $textColor } from "../const/const";

const styledIcons = css`
  color: ${$textColor};
  height: 1rem;
`;
const StyledMail = styled(Mail)`
  ${styledIcons}
`;
const StyledLinkedinSquare = styled(LinkedinSquare)`
  ${styledIcons}
`;
const StyledGithub = styled(Github)`
  ${styledIcons}
`;
const CONTACTS = [
  {
    id: 1,
    title: "e-mail",
    img: StyledMail,
    url: "mailto:hayk.sargsyan.devops@gmail.com",
  },
  {
    id: 2,
    title: "linkedin",
    img: StyledLinkedinSquare,
    url: "https://www.linkedin.com/in/hayk-sargsyan-197187223",
  },
  {
    id: 3,
    title: "github",
    img: StyledGithub,
    url: "https://github.com/sargsyan1986",
  },
];
const StyledHeroLeftSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 10%;
  height: 100%;
  @media screen and (max-width: 414px) and (orientation: portrait) {
    height: 95%;
  }
`;
const HeaderLogoImage = styled.img`
  aspect-ratio: 1/1;
  @media screen and (max-width: 414px) and (orientation: portrait) {
    width: 3rem;
    height: 3rem;
  }
`;
const StyledContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledContacts = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const StyledContactsItem = styled.li`
  cursor: pointer;
  margin-top: 0.3rem;
`;
const HeroLeftSideContainer = () => {
  return (
    <StyledHeroLeftSideContainer>
      <HeaderLogoImage
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-daley="4000"
        src={LOGO}
        alt="logo"
        width="45rem"
        height="45rem"
      />
      <StyledContactInfo>
        <StyledProfession fullProfession>Devops Engineer</StyledProfession>
      </StyledContactInfo>
      <StyledContacts
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        {CONTACTS.map((item) => (
          <StyledContactsItem key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {<item.img />}
            </a>
          </StyledContactsItem>
        ))}
      </StyledContacts>
    </StyledHeroLeftSideContainer>
  );
};
export default HeroLeftSideContainer;
