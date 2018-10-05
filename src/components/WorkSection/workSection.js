import React, { Component } from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import worksBg from "./img/worksBg.jpg";
import work1 from "./img/work1.jpg";
import work2 from "./img/work2.jpg";
import cursor from "./img/cursor.png";
import Toggle from "../../Utilities/Toggle";
import Avatar from '../Avatar/avatar'
import { Spring, config, Transition} from 'react-spring';


const SectionLeft = styled.div`
  position: relative;
  flex: 1;
  background-image: url('${worksBg}');
  background-position: center;
  background-size: cover;
  will-change: background-color;
`;

const SectionRight = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
`;

const WorkImageBoxOuter = styled.div`
  flex: 1;
  overflow: hidden;
`;

const WorkImageTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Rokkitt", serif;
  font-weight: bold;
  line-height: 5rem;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const WorkImageBoxInner = styled.div`
  position: relative;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${props => props.background}') center / cover;
  cursor: pointer;
  cursor: url('${cursor}'), auto;
  transition: transform 2s;
  &:hover {
    transform: scale(1.3);
  }
  &:hover ${WorkImageTitle} {
    color: #affff4;
  }
`;

const WorkImageDesc = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
  padding-left: 10rem;
`;

const WorkImageDescText = styled.p`
  font-size: 1.8rem;
  color: #7d6c65;
`;

const WorkImageDescLink = styled.a`
  position: absolute;
  bottom: 5rem;
  &:link,
  :visited {
    color: #2f86c6;
    text-decoration: none;
    border-bottom: 1px solid #2f86c6;
    padding: 3px;
    display: inline-block;
    font-size: 2.4rem;
    transition: all 0.2s;
  }
  &:hover {
    background-color: #2f86c6;
    color: white;
    text-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
    transform: translateY(-2px);
  }
  &:active {
    text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
    transform: translateY(0);
  }
`;

const AvatarAnim = styled(Avatar)`
  
`;

class WorkSection extends Component {

  render() {

    const Content = ({ opacity, toggle, on, textRotate, leftResize, imgResize }) => (
       <SectionWrapper id='works'>
        <SectionLeft style={{ opacity: `${opacity}`, flex: `${leftResize}`}} >
        <AvatarAnim name='Teka'/>
          <SectionTitleBox>
            <SectionTitleText style={{transform: `${textRotate}`}}>Works</SectionTitleText>
          </SectionTitleBox>
        </SectionLeft>
        <SectionRight>
          <WorkImageBoxOuter onClick={toggle} style={{flex:`${imgResize}`}}>
            <WorkImageBoxInner background={work2}>
              <WorkImageTitle>lake aerial view</WorkImageTitle>
            </WorkImageBoxInner>
          </WorkImageBoxOuter>
          <WorkImageBoxOuter>
           <WorkImageDesc>
             <WorkImageDescText>
              <span style={{fontWeight: 'bold'}}>Pellentesque</span> viverra urna eu hendrerit lobortis. In quis auctor felis,
            vel consectetur massa. Morbi ac rutrum dolor. Aenean at justo
            hendrerit, cursus elit eget, congue ligula.
            Aliquam consectetur sagittis neque vel gravida. Aenean at tincidunt
          nulla. Nulla hendrerit mattis ex at tincidunt.
             </WorkImageDescText>
             <WorkImageDescLink href='#'>View more projects &rarr;</WorkImageDescLink>
           </WorkImageDesc>
          
          </WorkImageBoxOuter>
          
        </SectionRight>
       
      </SectionWrapper>
    );

    return (
      <Toggle>
      {({ toggle, on }) => (
        <Spring 
          config= {config.slow}
          to={{
            opacity: on ? .7 : .9,
            textRotate: on ? 'rotate(90deg)' : 'rotate(0deg)',
            leftResize: on ? .3 : 1,
            imgResize: on ? 1.3 : 1
          }}
          toggle={toggle}
          children={Content}
        />
      )}
      </Toggle>
    );
  }
}

export default WorkSection;
