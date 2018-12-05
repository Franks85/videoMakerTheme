import React, { Component } from "react";
import styled from "styled-components";
import { TimelineMax, CSSPlugin } from "gsap/all";
import InViewMonitor from "react-inview-monitor";
import { linkData } from "./footerLinkData";
import { media } from "../../styledComponents/mediaQueryHelper";

// eslint-disable-next-line
const plugins = [CSSPlugin];

const Wrapper = styled.footer`
  height: 30rem;
  background-color: #242222;
  display: flex;
  position: relative;
`;

const Linkbox = styled.div`
  flex: 1;
  padding: 8rem;
  ${media.lessThan("phone")`
    padding: 2.5rem;
  `};
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2.5rem;
  align-items: center;
  transform: translateY(20px);
  ${media.lessThan("phone")`
    grid-gap: 1.5rem;
    transform: translateY(0px);
  `};
`;

const Link = styled.a`
  transition: all 0.5s;
  opacity: 0;
  ${media.lessThan("phone")`
      opacity: 1;
  `};

  &:link,
  &:visited {
    font-size: 1.4rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.3rem;
  }
  &:hover,
  &:active {
    transform: translateY(-3px) scale(1.05);
    color: #b7ccff;
  }
`;

const CopyrightBox = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 5rem;
  display: inline-block;
`;

const CopyrightText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: #b7ccff;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.links = [];
    this.tl = new TimelineMax({ paused: true });
  }

  startAnimation = () => {
    this.tl.staggerTo(this.links, 0.3, { autoAlpha: 1, y: -20 }, 0.2).play();
  };

  reverseAnimation = () => {
    this.tl.staggerTo(this.links, 0.1, { autoAlpha: 0, y: 0 }, 0.1).play();
  };
  render() {
    return (
      <Wrapper>
        <Linkbox>
          <InViewMonitor
            onInView={this.startAnimation}
            onNotInView={this.reverseAnimation}
            repeatOnInView={true}
          >
            <LinkList>
              {linkData.map((el, index) => {
                return (
                  <Link
                    key={el.id}
                    href={el.href}
                    innerRef={li => (this.links[index] = li)}
                  >
                    {el.title}
                  </Link>
                );
              })}
            </LinkList>
          </InViewMonitor>
        </Linkbox>
        <CopyrightBox>
          <CopyrightText>&copy; 2018 Frank Design</CopyrightText>
        </CopyrightBox>
      </Wrapper>
    );
  }
}

export default Footer;
