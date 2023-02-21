import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { StyledInnerMainSection } from "./HomeSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { $headerColor, $textColor } from "../const/const";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const StyledContactBlock = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1.25rem;
  padding: 0 0 0.63rem 0;
  height: 35rem;
  width: 100%;
  transform: translate(-5%, -5%);
  background: rgba(0, 0, 0/10%);
  border-radius: 2%;
  box-sizing: border-box;
  box-shadow: 0 1rem 1.6rem rgba(0, 0, 0, 0.6);
  p {
    color: #f57878;
    font-size: 0.63rem;
    font-style: italic;
    font-weight: bold;
  }
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    height: 70%;
    width: 70%;
  }
  @media screen and (max-width: 1536px) and (orientation: landscape) {
    height: 80%;
    width: 90%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    height: 60%;
    width: 90%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    height: 70%;
    width: 100%;
  }
  @media screen and (max-width: 820px) and (orientation: landscape) {
    height: 75%;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    margin: 2rem 0 0 1rem;
    height: 65%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    height: 65%;
    width: 95%;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    margin: 2rem 0 0 1rem;
    height: 100%;
    width: 90%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    width: 85%;
  }
`;
const StyledTitle = styled.h1`
  color: ${$headerColor};
  height: fit-content;
  @media screen and (max-width: 820px) and (orientation: portrait) {
    margin: 2rem 0 0 1rem;
  }
  @media screen and (max-width: 414px) and (orientation: portrait) {
    padding-top: 5rem;
  }
`;
const StyledBlocks = css`
  display: flex;
  flex-direction: column;
`;
const StyledTopBlock = styled.div`
  ${StyledBlocks}
  justify-content: space-between;
  padding: 1rem;
`;
const StyledBottomBlock = styled.div`
  ${StyledBlocks}
  height: inherit;
  padding: 1rem 1rem 0 1rem;
  justify-content: space-around;
`;
const StyledLabel = styled.sub`
  font-size: 0.63rem;
`;
const StyledInput = styled.input`
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  color: white;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: "color 9999s ease-out, background-color 9999s ease-out";
    transition-delay: 9999s;
  }
  border-bottom-width: thick;
  border-color: ${$textColor};
  background-color: transparent;
  height: 2.2rem;
  width: inherit;
`;
const StyledInputText = styled.textarea`
  border-bottom-width: thick;
  border-color: ${$textColor};
  outline: none;
  background-color: transparent;
  resize: none;
  height: 100%;
  color: white;
`;
const StyledSubmitButton = styled.input`
  display: inline-block;
  border: none;
  border-radius: 5%;
  height: 30%;
  width: 10%;
  color: ${$headerColor};
  outline: none;
  cursor: pointer;
  font-size: larger;
  background-color: transparent;
  align-self: center;
  justify-content: center;
  box-shadow: 0 1rem 1.6rem rgba(0, 0, 0, 0.9);
  &:active {
    background-color: ${$headerColor};
    box-shadow: 0 0.63rem 1.25rem rgba(0, 0, 0, 0.3);
    transform: translateY(0.25rem);
  }
  @media screen and (min-width: 1537px) and (orientation: landscape) {
    width: 15%;
    height: 10%;
  }
  @media screen and (max-width: 1536px) and (orientation: landscape) {
    width: 10%;
    height: 20%;
  }
  @media screen and (max-width: 820px) and (orientation: portrait) {
    width: 20%;
    height: 13%;
  }
  @media screen and (max-width: 640px) and (orientation: portrait) {
    height: 15%;
  }
  @media screen and (max-width: 320px) and (orientation: portrait) {
    width: 30%;
  }
`;
const ContactsSection = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required(),
  });
  const SERVICE_ID = "service_azq4k2g";
  const TEMPLATE_ID = "template_s5xemf7";
  const PUBLIC_KEY = "183AWUUCcr30KEAY8";
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const sendEmail = () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset();
  };
  return (
    <StyledInnerMainSection>
      <StyledTitle>Contact Me</StyledTitle>
      <StyledContactBlock
        ref={form}
        onSubmit={(e) => handleSubmit(sendEmail)(e)}
      >
        <StyledTopBlock>
          <StyledLabel htmlFor="userName">Your Name</StyledLabel>
          <StyledInput
            type="text"
            id="userName"
            name="user_name"
            {...register("userName")}
          />
          {errors.name && <p>Name is required!</p>}
          <StyledLabel htmlFor="email">Your Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="user_email"
            {...register("email")}
          />
          {errors.email && <p>Email is required!</p>}
        </StyledTopBlock>
        <StyledBottomBlock>
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledInputText 
            type="text"
            name="message"
            rows={4}
            placeholder="Type your message to me"
            {...register("message", { required: true })}
          />
          {errors.message && <p>Your message is required!</p>}
        </StyledBottomBlock>
        <StyledSubmitButton type="submit" value="Send" aria-label="send" />
      </StyledContactBlock>
    </StyledInnerMainSection>
  );
};
export default ContactsSection;
