import React, { Component } from "react";
import styled from "styled-components";
import {
  SectionWrapper,
  SectionTitleBox,
  SectionTitleText
} from "../../styledComponents/styledComponents";
import worksBg from "./img/worksBg.jpg";
import cursor from "./img/cursor.png";
import Toggle from "../../Utilities/Toggle";
import Avatar from "../Avatar/avatar";
import { Spring, config } from "react-spring";
import { media } from "../../styledComponents/mediaQueryHelper";
import Media from "react-media";

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
  ${media.lessThan("phone")`
  padding: 2rem;
  `};
`;

const WorkImageDescText = styled.p`
  font-size: 1.8rem;
  color: #7d6c65;
`;

const AvatarAnim = styled(Avatar)``;

class WorkSection extends Component {
  render() {
    const { bg, title, description } = this.props;
    const Content = ({
      opacity,
      toggle,
      on,
      textRotate,
      leftResize,
      imgResize
    }) => (
      <SectionWrapper id="works">
        <Media query={{ maxWidth: 760 }}>
          {matches =>
            matches ? (
              <SectionLeft style={{ flex: 0.5 }}>
                <AvatarAnim name="Teka" />
                <SectionTitleBox>
                  <SectionTitleText style={{ transform: `rotate(90deg)` }}>
                    Works
                  </SectionTitleText>
                </SectionTitleBox>
              </SectionLeft>
            ) : (
              <SectionLeft
                style={{ opacity: `${opacity}`, flex: `${leftResize}` }}
              >
                <AvatarAnim name="Teka" />
                <SectionTitleBox>
                  <SectionTitleText style={{ transform: `${textRotate}` }}>
                    Works
                  </SectionTitleText>
                </SectionTitleBox>
              </SectionLeft>
            )
          }
        </Media>

        <SectionRight>
          <WorkImageBoxOuter onClick={toggle} style={{ flex: `${imgResize}` }}>
            <WorkImageBoxInner background={bg}>
              <WorkImageTitle>{title}</WorkImageTitle>
            </WorkImageBoxInner>
          </WorkImageBoxOuter>
          <WorkImageBoxOuter>
            <WorkImageDesc>
              <WorkImageDescText>{description}</WorkImageDescText>
            </WorkImageDesc>
          </WorkImageBoxOuter>
        </SectionRight>
      </SectionWrapper>
    );

    return (
      <Toggle>
        {({ toggle, on }) => (
          <Spring
            config={config.slow}
            to={{
              opacity: on ? 0.7 : 0.9,
              textRotate: on ? "rotate(90deg)" : "rotate(0deg)",
              leftResize: on ? 0.3 : 1,
              imgResize: on ? 1.4 : 1
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
