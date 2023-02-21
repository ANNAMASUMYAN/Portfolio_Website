import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import {
  StyledAuthorName,
  StyledAuthorNameBox,
  StyledInnerMainSection,
} from "./HomeSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel} from "swiper";
import styled from "styled-components";
import { $headerColor, $textColor } from "../const/const";
import { StyledProfession } from "../hero/MainSection";
import { ITEMS } from "../const/const";

const StyledCarouselWrapper = styled.div`
  display: flex;
  cursor: context-menu;
  @media screen and (max-width: 912px) and (orientation: portrait) {
    flex-direction: column;
    padding-left: 9rem;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    padding-left: 5rem;
  }
  @media screen and (max-width: 540px) and (orientation: portrait) {
    padding-left: 4rem;
    justify-content: center;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    padding-left: 3rem;
  }
  @media screen and (max-width: 390px) and (orientation: portrait) {
    padding-left: 2rem;
    width: 80%;
  }
`;
const StyledSwiper = styled(Swiper)`
  width: 100% !important;
  @media screen and (max-width: 768px) and (orientation: portrait) {
    width: 50%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    width: 70%;
  }
  .swiper-button-next {
    &::after {
      margin-left: -31rem;
      @media screen and (min-width: 1537px) and (orientation: landscape) {
        margin-left: -30rem;
      }
      @media screen and (max-width: 1536px) and (orientation: landscape) {
        margin-left: -35rem;
      }
      @media screen and (max-width: 1366px) and (orientation: landscape) {
        margin-left: -15rem;
      }
      @media screen and (max-width: 1280px) and (orientation: landscape) {
        margin-left: -5rem;
      }
      @media screen and (max-width: 1100px) and (orientation: landscape) {
        margin-left: 0;
      }
      @media screen and (max-width: 1024px) {
        margin-left: 1.5rem;
      }
      @media screen and (max-width: 820px) {
        margin-left: -10rem;
      }
      @media screen and (max-width: 768px) and (orientation: portrait) {
        margin-left: -5rem;
      }
      @media screen and (max-width: 640px) and (orientation: portrait) {
        margin-left: -4rem;
      }
    }
  }
  .swiper-button-prev {
    &::after {
      margin-right: 1rem;
    }
  }
`;
const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 1.56rem 5rem;
  width: 15rem;
  color: ${$textColor};
  h1 {
    width: inherit;
    height: fit-content;
    color: ${$headerColor};
    white-space: nowrap;
    @media screen and (min-width: 1537px) and (orientation: landscape) {
      line-height: 1.8rem;
      font-size: 2.5rem;
    }
    @media screen and (max-width: 640px) and (orientation: portrait) {
      margin-top: 0.5rem;
      text-align: center;
    }
    @media screen and (max-width: 540px) and (orientation: portrait) {
      margin-top: 0;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 414px) and (orientation: portrait) {
      font-size: 1.5rem;
      line-height: 1.7rem;
    }
  }
  p {
    @media screen and (min-width: 1537px) and (orientation: landscape) {
      line-height: 1.5rem;
      font-size: 1.2rem;
    }

    @media screen and (max-width: 912px) and (orientation: portrait) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 820px) and (orientation: portrait) {
      font-size: 1rem;
      text-align: center;
    }
    @media screen and (max-width: 414px) and (orientation: portrait) {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    margin: 1.56rem 1.56rem 1.56rem 13rem;
  }
  @media screen and (max-width: 1536px) and (orientation: landscape) {
    margin: 1.56rem 1.56rem 1.56rem 6rem;
  }
  @media only screen and (max-width: 1366px) and (orientation: landscape) {
    margin: 1.56rem 8rem;
  }
  @media only screen and (max-width: 1280px) and (orientation: landscape) {
    margin: 1.56rem 6rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 1.56rem;
  }
  @media screen and (max-width: 912px) and (orientation: portrait) {
    margin-left: -1.5rem;
  }
  @media screen and (max-width: 768px) and (orientation: portrait) {
    margin-left: -2.6rem;
  }
  @media screen and (max-width: 540px) and (orientation: portrait) {
    margin-left: -1rem;
    justify-content: space-around;
  }
  @media screen and (max-width: 440px) and (orientation: portrait) {
    margin-left: -3rem;
  }
`;
const StyledIcon = styled.div`
  justify-self: flex-start;
  color: ${$textColor};
  @media screen and (max-width: 912px) and (orientation: portrait) {
    font-size: 1.5rem;
    & > svg {
      padding-left: 0;
      width: 12rem;
      height: 12rem;
    }
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    font-size: 0;
  }
  @media screen and (max-width: 540px) and (orientation: portrait) {
    width: fit-content;
    justify-self: center;
    & > svg {
      width: 12rem;
      height: 12rem;
    }
  }
  @media screen and (max-width: 440px) and (orientation: portrait) {
    line-height: 0rem;
    & > svg {
      width: 8rem;
      height: 9rem;
    }
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    & > svg {
      padding-left: 0.8rem;
      width: 11rem;
    }
  }
  @media screen and (max-width: 320px) and (orientation: portrait) {
    & > svg {
      width: 9rem;
    }
  }
`;
const SkillsSection = () => {
  return (
    <StyledInnerMainSection>
      <StyledAuthorNameBox>
        <StyledProfession liteProfession uppercase>
          Devops
        </StyledProfession>
        <StyledAuthorName>
          <span>Hayk Sargsyan</span>
        </StyledAuthorName>
      </StyledAuthorNameBox>

      <StyledSwiper
        slidesPerView={1}
        modules={[Navigation, Mousewheel]}
        keyboard={true}
        navigation={true}
        loop
        loopedSlides={4}
        freeMode
        breakpoints={{
          1366: {
            width: 1366,
            slidesPerView: 1,
          },
          1280: {
            width: 1280,
            slidesPerView: 1,
          },
          820: {
            width: 820,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          540: {
            width: 540,
            slidesPerView: 1,
          },
          414: {
            width: 414,
            slidesPerView: 1,
          },
          390: {
            width: 390,
            slidesPerView: 1,
          },
          320: {
            width: 320,
            slidesPerView: 1,
          },
        }}
      >
        {ITEMS.map((item) => (
          <SwiperSlide key={item.id}>
            <StyledCarouselWrapper>
              <StyledIcon>{<item.icon />}</StyledIcon>
              <StyledTextWrapper>
                <h1>{item.header}</h1>
                <p>{item.text}</p>
              </StyledTextWrapper>
            </StyledCarouselWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledInnerMainSection>
  );
};
export default SkillsSection;
