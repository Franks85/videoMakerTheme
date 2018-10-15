import React from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import contactBg from "./img/contactBg.jpg";
import Avatar from "../Avatar/avatar";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";
import HeadShake from "react-reveal/HeadShake";
import { media } from "../../styledComponents/mediaQueryHelper";

const SectionLeft = styled.div`
  position: relative;
  flex: 1;
  background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8)) , url('${contactBg}') center / cover;
  ${media.lessThan("tablet")`
      flex: .5;
      padding: 0;
  `};
`;

const SectionRight = styled.div`
  flex: 1;
  background-color: #18191b;
  color: white;
  padding: 2rem 0;
`;

const SectionRightTitle = withReveal(
  styled.h3`
    font-size: 2.6rem;
    text-align: center;
    padding: 3rem 0;
    text-shadow: 0 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
  `,
  <HeadShake />
);

const TitleDivider = styled.div`
  border: 2px solid white;
  width: 80%;
  margin: auto;
`;

const ContactBox = withReveal(
  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15% 0;
  `,
  <Zoom delay={300} />
);

const ContactInfo = styled.p`
  font-size: 2rem;
  color: #fff;
  margin: 2rem 0;
  &:hover {
    color: #666;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #685734;
  &:hover {
    color: blueviolet;
  }
`;

const contactSection = () => {
  return (
    <SectionWrapper id="contact">
      <SectionLeft>
        <Avatar name="Teka" />
        <SectionTitleBox>
          <SectionTitleText>Contact</SectionTitleText>
        </SectionTitleBox>
      </SectionLeft>
      <SectionRight>
        <SectionRightTitle>Matteo Toccaceli - Video Maker</SectionRightTitle>
        <TitleDivider />
        <ContactBox>
          <ContactInfo>matteoVideomaker@gmail.com</ContactInfo>
          <ContactInfo>350489753</ContactInfo>
          <ContactInfo>
            <SocialLink href="#">Facebook</SocialLink>
          </ContactInfo>
          <ContactInfo>
            <SocialLink href="#">Instagram</SocialLink>
          </ContactInfo>
        </ContactBox>
      </SectionRight>
    </SectionWrapper>
  );
};

export default contactSection;
