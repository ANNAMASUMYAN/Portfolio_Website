import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import HomeSection from "../sections/HomeSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import ContactsSection from "../sections/ContactsSection";
import SkillsSection from "../sections/SkillsSection";
import Navbar from "../header/Navbar";

const StyledSwiperMain = css`
  height: 100%;
  width: 100%;
`;
const StyledSwiperContainer = styled.div`
  ${StyledSwiperMain}
`;
const StyledSwiperContent = styled.div`
  ${StyledSwiperMain}
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
`;
export const StyledSwiper = styled(Swiper)`
  margin: 0;
  width: 100%;
`;
const StyledVerticalWord = styled.small`
  transform: rotate(-90deg);
  font-size: 0.6rem;
  z-index: 100;
`;
const StyledSwiperBlock = () => {
  return (
    <StyledSwiperContainer>
      <StyledSwiperContent
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1800"
      >
        <StyledSwiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
        >
          <div slot="container-start">
            <Navbar />
          </div>
          <SwiperSlide>
            <HomeSection />
          </SwiperSlide>
          <SwiperSlide>
            <SkillsSection />
          </SwiperSlide>
          <SwiperSlide>
            <TechnologiesSection />
          </SwiperSlide>
          <SwiperSlide>
            <ContactsSection />
          </SwiperSlide>
        </StyledSwiper>
        <StyledVerticalWord>scroll</StyledVerticalWord>
      </StyledSwiperContent>
    </StyledSwiperContainer>
  );
};
export default StyledSwiperBlock;
