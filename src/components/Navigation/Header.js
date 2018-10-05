import React, { Component } from "react";
import styled from "styled-components";
import MobileNavigation from "./mobileNavigation";
import { media } from "../../styledComponents/mediaQueryHelper";
import headerBg from './img/headerBg.jpg';
import {reveal} from '../../styledComponents/keyframes'
import titleIcon from './img/aperture.png'
import Toggle from '../../Utilities/Toggle';
import {Spring, config} from 'react-spring'
 
const Wrapper = styled.div`
`;

const HeaderBox = styled.header`
  font-family: 'Rokkitt', serif;
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(24,25,27,.3), rgba(24,25,27,.1)), url('${headerBg}') center / cover;
`;

const NavBox = styled.nav`
  position: absolute;
  top: 3rem;
  left: 8rem;
  width: 40%;
  height: 5rem;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

const NavItem = styled.li`
  
`;

const NavLink = styled.a`
  &:link,
  :visited {
    display: inline-block;
    font-size: 2.8rem;
    letter-spacing: 0.3rem;
    color: #000;
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
    background-position: 60%;
    color: #000;
    transform: translateX(1rem);
  }
`;

const HeaderTitleBox = styled.div`
  position: absolute;
  left: 5rem;
  bottom: 5rem;
  height: 6.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: 4rem;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #000000b3;
`;

const HeaderTitleIcon = styled.div`
  background: url('${titleIcon}') no-repeat;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
`;

const ArtistNameBox = styled.div`
  position: absolute;
  right: 17%;
  top: 40%;
  width: 30%;
  animation: 2s ${reveal} ease-in-out ;
`;

const ArtistNameText = styled.h3`
  font-family: 'Rock Salt', cursive;
  color: #ddd;
  font-size: 2.8rem;
  display: inline-block;
`;

class Header extends Component {
  render() {

    const Content = ({filter, toggle, nameColor, linkColor, x, y}) => (
      <HeaderBox  style={{filter: `brightness(${filter}%)`}}>
          <NavBox>
            <NavList>
              <NavItem >
                <NavLink style={{color: `${linkColor}`}} href='#about'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href='#works'>Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href='#contact'>Contact</NavLink>
              </NavItem>
            </NavList>
          </NavBox>
          <HeaderTitleBox >
        <HeaderTitleIcon onClick={toggle} />
        <HeaderTitle style={{color: `${linkColor}`}}>video maker / photographer</HeaderTitle>
      </HeaderTitleBox>
          <ArtistNameBox>
            <ArtistNameText style={{color: `${nameColor}`, transform: `translate(${x}rem, ${y}rem)`}}>Matteo <br/>Toccaceli</ArtistNameText>
          </ArtistNameBox>
        </HeaderBox>
    );

    return (
      <Wrapper>
        <MobileNavigation />
        
          <Toggle>
            {({ toggle, on }) => (
              <Spring 
                config= {config.slow}
                to={{
                  filter: on ? 70 : 120,
                  linkColor: on ? 'rgba(203, 25, 25,.7)' : '#000',
                  nameColor: on ? 'rgb(122, 29, 29)' : '#ddd',
                  x: on ? -32 : 0,
                  y: on ? -7 : 0 
                }}
                toggle={toggle}
                children={Content}
              />
            )}
      </Toggle>
      
        
      </Wrapper>
    );
  }
}

export default Header;
