import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Project from "./workDetail";
import ProjectContent from './projectContent';
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import worksBg from "./img/worksBg.jpg";
import cursor from "./img/cursor.png";
import Toggle from "../../Utilities/Toggle";
import Avatar from "../Avatar/avatar";
import { media } from "../../styledComponents/mediaQueryHelper";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { workDataImg, workDataDesc, avatarData } from "./worksData";

const SectionLeft = styled.div`
  position: relative;
  flex: 1;
  background-image: url('${worksBg}');
  background-position: center;
  background-size: cover;
  will-change: background-color;
  ${media.lessThan("tablet")`
      flex: .5;
      padding: 0;
  `};
`;

const SectionRight = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
`;

const WorkImageBoxOuter = withReveal(
  styled.div`
  flex: 1.7;
  overflow: hidden;
  position: relative;
`, <Fade delay={300}/>
);

const WorkDescBox = styled.div`
  flex: 1;
  overflow: hidden;
`;

const WorkAvatarBox = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  z-index: 2;
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
  ${media.lessThan("phone")`
  padding: 2rem;
  `};
`;

const WorkImageDescText = styled.p`
  font-size: 1.8rem;
  color: #7d6c65;
`;

class WorkSection extends Component {
  state = {
    id: 0
  };
  openImg = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("data-id");
    this.setState({ id });
  };
  render() {
    const { id } = this.state;
    const worksImg = workDataImg.map(item => {
      return (
        <Fragment key={item.id}>
          <WorkImageBoxInner background={item.background}>
            <WorkImageTitle>{item.title}</WorkImageTitle>
          </WorkImageBoxInner>
        </Fragment>
      );
    });

    const workDesc = workDataDesc.map(item => {
      return (
        <WorkImageDesc>
          <WorkImageDescText key={item.id}>
            {item.description}
          </WorkImageDescText>
        </WorkImageDesc>
      );
    });

    const avatars = avatarData.map(item => {
      return (
        <Avatar
          key={item.id}
          data-id={item.id}
          onClick={this.openImg}
          name={item.name}
          width={12}
          height={12}
          top={item.top}
          left={item.left}
          url={item.url}
        />
      );
    });

    return (
      <Toggle>
        {({ on, toggle }) => (
          <SectionWrapper id="works">
            <Project on={on} toggle={toggle}>
              <ProjectContent />
            </Project>
            <SectionLeft>
              <SectionTitleBox>
                <SectionTitleText>Works</SectionTitleText>
              </SectionTitleBox>
            </SectionLeft>
            <SectionRight>
              <WorkImageBoxOuter onClick={toggle}>
                {worksImg[id]}
              </WorkImageBoxOuter>
              <WorkDescBox>{workDesc[id]}</WorkDescBox>
              <WorkAvatarBox>{avatars}</WorkAvatarBox>
            </SectionRight>
          </SectionWrapper>
        )}
      </Toggle>
    );
  }
}

export default WorkSection;
