import React from 'react'
import styled from 'styled-components'
import { SectionWrapper, SectionTitleBox, SectionTitleText } from "../../styledComponents/styledComponents";
import contactBg from './img/contactBg.jpg'
import Avatar from '../Avatar/avatar'

const SectionLeft = styled.div`
  position: relative;
  flex: 1;
  padding: 4rem;
  padding-right: 10rem;
  background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8)) , url('${contactBg}') center / cover;
`;

const SectionRight = styled.div`
  flex: 1;
  padding: 4rem;
  padding-left: 10rem;
  background-color: #18191b;
  color: white;
`;

const SectionRightTitle = styled.h3`
  font-size: 2.6rem;
  padding: 3rem 0;
  text-shadow: 0 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
`;

const contactSection = () => {
  return (
    <SectionWrapper id='contact'>
        <SectionLeft>
          <Avatar name='Teka'/>
          <SectionTitleBox>
                <SectionTitleText>Contact</SectionTitleText>
            </SectionTitleBox>
        </SectionLeft>
        <SectionRight>
            <SectionRightTitle>Matteo Toccaceli - Video Maker</SectionRightTitle>
        </SectionRight>
    </SectionWrapper>
)
  }

export default contactSection