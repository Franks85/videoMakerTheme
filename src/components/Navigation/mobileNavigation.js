import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../styledComponents/mediaQueryHelper";

const MobileNavContainer = styled.div`
  ${media.greaterThan("phone")`
      display: none;
  `};
`;

const MobileNavToggleLabelIcon = styled.span`
  margin-top: 3.5rem;
  position: relative;
  &,
  &:before,
  &:after {
    width: 3rem;
    height: 3px;
    background-color: #7ca3ff;
    display: inline-block;
    ${media.lessThan("phone")`
      width: 2.5rem;
      height: 2px;
    `};
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &:before {
    top: -0.8rem;
  }
  &:after {
    top: 0.8rem;
  }
  ${media.lessThan("phone")`
    margin-top: 2.5rem;
`};
`;

const MobileNavToggleLabel = styled.label`
  background-color: #e2fffc;
  text-align: center;
  cursor: pointer;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  position: fixed;
  top: 2rem;
  left: 3rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  z-index: 200;
  &:hover ${MobileNavToggleLabelIcon}:before {
    top: -1rem;
  }
  &:hover ${MobileNavToggleLabelIcon}:after {
    top: 1rem;
  }
  ${media.lessThan("phone")`
    height: 5rem;
    width: 5rem;
`};
`;

const MobileNavBg = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 2.5rem;
  left: 3.5rem;
  background: radial-gradient(azure, blue);
  z-index: 100;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  ${media.lessThan("phone")`
    height: 4rem;
    width: 4rem;
`};
`;

const MobileNav = styled.nav`
  height: 100vh;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 150;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const MobileNavToggle = styled.input`
  display: none;
  &:checked ~ ${MobileNavBg} {
    transform: scale(80);
  }

  &:checked ~ ${MobileNav} {
    opacity: 1;
    width: 100%;
  }
  &:checked + ${MobileNavToggleLabel} ${MobileNavToggleLabelIcon} {
    background-color: transparent;
  }
  &:checked + ${MobileNavToggleLabel} ${MobileNavToggleLabelIcon}:before {
    top: 0;
    transform: rotate(135deg);
  }
  &:checked + ${MobileNavToggleLabel} ${MobileNavToggleLabelIcon}:after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${media.lessThan("phone")`
  top: 30%;
`};
`;

const MobileNavItem = styled.li`
  margin: 1rem;
`;

const MobileNavLink = styled.a`
  &:link,
  :visited {
    display: inline-block;
    font-size: 2.8rem;
    letter-spacing: 0.3rem;
    color: white;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    background: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      rgb(255, 255, 255) 50%
    );
    background-size: 240%;
    transition: all 0.6s;
  }
  &:hover,
  :active {
    background-position: 100%;
    color: var(--color-primary);
    transform: translateX(1rem);
  }
`;

class mobileNavigation extends Component {

  state = {
    openLink: false,
    isOpenMenu: false
  }

  toggleLink = () => {
    this.setState({
      openLink: true,
      isOpenMenu: false
    })
  }

  toggleNav = () => {
    this.setState({
      openLink: false,
      isOpenMenu: true
    })
  }
  render() {
    const { openLink, isOpenMenu } = this.state;
    return (
      <MobileNavContainer>
        {openLink && !isOpenMenu ? <MobileNavToggle type="checkbox" id="navi-toggle" checked={false} /> : <MobileNavToggle type="checkbox" id="navi-toggle" />}
        <MobileNavToggleLabel htmlFor="navi-toggle" onClick={this.toggleNav}>
          <MobileNavToggleLabelIcon />
        </MobileNavToggleLabel>
        <MobileNavBg />
        <MobileNav>
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLink href="/" onClick={this.toggleLink}>Home</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#" onClick={this.toggleLink}>Gallery</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#" onClick={this.toggleLink}>Camere</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#" onClick={this.toggleLink}>Contatti</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#">Regolamento</MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </MobileNavContainer>
    );
  }
}

export default mobileNavigation;
