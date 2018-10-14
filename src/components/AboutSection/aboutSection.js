import React from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import aboutImg from "./img/about.jpg";
import Avatar from "../Avatar/avatar";
import { media } from "../../styledComponents/mediaQueryHelper";

const SectionLeft = styled.div`
  position: relative;
  flex: 1;
  
  background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8)) , url('${aboutImg}') center / cover;
  ${media.lessThan("tablet")`
      flex: .5; 
  `};
`;

const SectionRight = styled.div`
  flex: 1;
  background-color: #18191b;
  color: white;
  padding-top: 5rem;
`;

const SectionRightTitle = styled.h3`
  font-size: 2.2rem;
  padding: 2rem;
  text-align: center;
  text-shadow: 0 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
  ${media.lessThan("phone")`
    font-size: 2rem;
  `};
`;

const SectionRightDescription = styled.p`
  font-family: "PT Sans", sans-serif;
  font-size: 1.6rem;
  text-align: justify;
  margin: 2rem 4rem 2rem 10rem;
  ${media.lessThan("phone")`
      font-size: 1.5rem;
      margin: 2rem 2rem 2rem 4rem;
  `};
`;

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionLeft>
        <Avatar name="Teka" />
        <SectionTitleBox>
          <SectionTitleText>About</SectionTitleText>
        </SectionTitleBox>
      </SectionLeft>
      <SectionRight>
        <SectionRightTitle>
          I am a video maker living in Senigallia
        </SectionRightTitle>
        <SectionRightDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          hendrerit mattis ex at tincidunt.
        </SectionRightDescription>
        <SectionRightDescription>
          Aliquam consectetur sagittis neque vel gravida. Aenean at tincidunt
          nulla.
        </SectionRightDescription>
        <SectionRightDescription>
          Pellentesque viverra urna eu hendrerit lobortis. In quis auctor felis,
          vel consectetur massa. Morbi ac rutrum dolor. Aenean at justo
          hendrerit, cursus elit eget, congue ligula.
        </SectionRightDescription>
        <SectionRightDescription>
          Aliquam consectetur sagittis neque vel gravida. Aenean at tincidunt
          nulla. Nulla hendrerit mattis ex at tincidunt.
        </SectionRightDescription>
      </SectionRight>
    </SectionWrapper>
  );
};

export default AboutSection;
