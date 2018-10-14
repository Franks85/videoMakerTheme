import React from "react";
import styled from "styled-components";
import avatar from "../AboutSection/img/avatar.jpg";
import {media} from '../../styledComponents/mediaQueryHelper'

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
  top: 70%;
  left: 100%;
  z-index: 100;
  transform: translate(-50%, -50%);
  backface-visibility: hidden;
  border-radius: 50%;
  background: url('${avatar}') center / cover;
  filter: grayscale(100%) drop-shadow(5px 5px 8px black);
  z-index: 10;
  width: 14rem;
  height: 14rem;
  cursor: pointer;
  transition: filter .2s;
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
      display: none;
  `};
`;

const Avatar = (props) => {
  return (
    <AvatarCircle>
      <AvatarCaption>{props.name}</AvatarCaption>
    </AvatarCircle>
  );
};

export default Avatar;
