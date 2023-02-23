import React from "react";
import styled from "styled-components";
import { $textColor, NAVBARITEMS } from "./../const/const";
import { useSwiper } from "swiper/react";

const NavContainer = styled.div`
  display: flex;
  width: 100%;
`;
const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: 320px) and (orientation: portrait) {
    width: inherit;
    justify-content: end;
  }
`;
const NavItems = styled.li`
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: space-between;
  color: ${$textColor};
  z-index: 10000000;
  @media screen and (max-width: 440px) and (orientation: portrait) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) and (orientation: portrait) {
    font-size: 0.7rem;
  }
`;
const Navbar = () => {
  const swiper = useSwiper();
  return (
    <NavContainer>
      <NavContent>
        {NAVBARITEMS.map((item) => (
          <NavItems
            key={item.index}
            data-aos={item.fadeDirection}
            data-aos-delay="3000"
            data-aos-duration="2000"
            data-aos-offset="300"
            onClick={() => swiper.slideTo(item.index)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            {item.label}
          </NavItems>
        ))}
      </NavContent>
    </NavContainer>
  );
};
export default Navbar;
