import React from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import contactBg from "./img/contactBg.jpg";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";
import { media } from "../../styledComponents/mediaQueryHelper";
import { Icon } from "../../Utilities";

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

const SectionRightTitle = styled.h3`
  font-size: 2.6rem;
  text-align: center;
  padding: 3rem 0;
  text-shadow: 0 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
`;

const TitleDivider = styled.div`
  border: 2px solid white;
  width: 80%;
  margin: auto;
`;

const ContactBox = withReveal(
  styled.div`
    display: flex;
    flex-direction: column;
    margin: 15% 0;
    margin-left: 25%;
    ${media.lessThan("phone")`
      margin-left: 10%;
  `};
  `,
  <Zoom delay={300} bottom />
);

const ContactInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ContactInfo = styled.p`
  font-size: 2rem;
  color: #fff;
  margin: 2rem;
  &:hover {
    color: #666;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #685734;
  &:hover {
    color: #8b92dd;
  }
  margin: 2rem;
  font-size: 2rem;
`;

const contactSection = () => {
  return (
    <SectionWrapper id="contact">
      <SectionLeft>
        <SectionTitleBox>
          <SectionTitleText>Contact</SectionTitleText>
        </SectionTitleBox>
      </SectionLeft>
      <SectionRight>
        <SectionRightTitle>Matteo Toccaceli - Video Maker</SectionRightTitle>
        <TitleDivider />
        <ContactBox>
          <ContactInfoBox>
            <Icon name="email" color="#fff" />
            <ContactInfo>teovideomaker@mail.com</ContactInfo>
          </ContactInfoBox>
          <ContactInfoBox>
            <Icon name="telephone" color="#fff" />
            <ContactInfo>350489753</ContactInfo>
          </ContactInfoBox>
          <ContactInfoBox>
            <Icon name="facebook" color="#fff" />
            <SocialLink href="#">Facebook</SocialLink>
          </ContactInfoBox>
          <ContactInfoBox>
            <Icon name="instagram" color="#fff" />
            <SocialLink href="#">Instagram</SocialLink>
          </ContactInfoBox>
        </ContactBox>
      </SectionRight>
    </SectionWrapper>
  );
};

export default contactSection;
