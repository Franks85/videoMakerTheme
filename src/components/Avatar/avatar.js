import React from "react";
import styled from "styled-components";
import { media } from "../../styledComponents/mediaQueryHelper";

const AvatarCaption = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  opacity: 0;
  transition: all 0.3s;
`;

const AvatarCircle = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform: translate(-50%, -50%);
  backface-visibility: hidden;
  border-radius: 50%;
  background: url(${props => props.url}) center / cover;
  filter: grayscale(100%) drop-shadow(5px 5px 8px black);
  z-index: 10;
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover ${AvatarCaption} {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  &:hover {
    filter: grayscale(0%);
  }
  ${media.lessThan("tablet")`
      width: 12rem;
      height: 12rem;
  `};
  ${media.lessThan("phone")`
      width: 8rem;
      height: 8rem;
  `};
`;

const Avatar = props => {
  return (
    <AvatarCircle {...props}>
      <AvatarCaption>{props.name}</AvatarCaption>
    </AvatarCircle>
  );
};

export default Avatar;
