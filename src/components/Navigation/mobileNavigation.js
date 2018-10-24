import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../styledComponents/mediaQueryHelper";
import Toggle from "../../Utilities/Toggle";
import { Spring, config, animated } from "react-spring";

const MobileNavContainer = styled(animated.div)`
  ${media.greaterThan("tablet")`
      display: none;
  `};
`;

const MobileNavToggleLabelIcon = styled(animated.div)`
  position: relative;
  width: 4rem;
  height: 4px;
  background-color: #000;
  display: inline-block;
  margin-top: 3rem;
`;

const MobileNavToggleLabelIconTop = styled(MobileNavToggleLabelIcon)`
  position: absolute;
  left: 0;
  top: -1rem;
`;

const MobileNavToggleLabelIconBottom = styled(MobileNavToggleLabelIcon)`
  position: absolute;
  left: 0;
  top: 1rem;
`;

const MobileNavToggleLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  position: fixed;
  top: 2rem;
  left: 4rem;
  z-index: 200;
`;

const MobileNav = styled(animated.nav)`
  height: 100vh;
  background-color: #18191b;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 150;
`;

const MobileNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MobileNavItem = styled.li`
  margin: 2rem 0;
`;

const MobileNavLink = styled.a`
  &:link,
  :visited {
    display: inline-block;
    font-size: 2.8rem;
    color: #fff;
    letter-spacing: 0.3rem;
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

class MobileNavigation extends Component {
  render() {
    const Content = ({
      toggle,
      open,
      iconBg,
      iconRotation,
      iconPos,
      opacity
    }) => (
      <MobileNavContainer>
        <MobileNavToggleLabel onClick={toggle}>
          <MobileNavToggleLabelIconTop
            style={{
              backgroundColor: iconBg.interpolate(iconBg => iconBg),
              transform: iconRotation.interpolate(
                iconRotation => `rotate(${iconRotation}deg)`
              ),
              top: iconPos.interpolate(iconPos => iconPos)
            }}
          />
          <MobileNavToggleLabelIcon
            style={{ opacity: opacity.interpolate(opacity => opacity) }}
          />
          <MobileNavToggleLabelIconBottom
            style={{
              backgroundColor: iconBg.interpolate(iconBg => iconBg),
              transform: iconRotation.interpolate(
                iconRotation => `rotate(-${iconRotation}deg)`
              ),
              top: iconPos.interpolate(iconPos => iconPos)
            }}
          />
        </MobileNavToggleLabel>

        <MobileNav
          style={{
            transform: open.interpolate(open => `translate3d(${open}%, 0, 0)`)
          }}
        >
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLink href="#about" onClick={toggle}>
                About
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#works" onClick={toggle}>
                Works
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#contact" onClick={toggle}>
                Contact
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </MobileNavContainer>
    );
    return (
      <Toggle>
        {({ on, toggle }) => (
          <Spring
            native
            config={config.default}
            to={{
              open: on ? 0 : -100,
              iconBg: on ? "#fff" : "#000",
              iconRotation: on ? 135 : 0,
              iconPos: on ? 0 : "",
              opacity: on ? 0 : 1
            }}
            toggle={toggle}
            children={Content}
          />
        )}
      </Toggle>
    );
  }
}

export default MobileNavigation;
