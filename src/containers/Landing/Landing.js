import React, { Component, Fragment } from "react";
import { Transition, animated, config } from "react-spring";
import styled from "styled-components";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/footer";
import About from "../../components/AboutSection/aboutSection";
import Works from "../../components/WorkSection/workSection";
import Contact from "../../components/ContactSection/contactSection";
import projectImg1 from "../../components/WorkSection/img/work2.jpg";
import projectImg2 from "../../components/WorkSection/img/work3.jpg";
import projectImg3 from "../../components/WorkSection/img/work4.jpg";
import { media } from "../../styledComponents/mediaQueryHelper";

const WorksContainer = styled.div`
  position: relative;
`;

const WorkImageDescLink = styled.button`
  position: absolute;
  bottom: 15%;
  right: 3rem;
  border: none;
  cursor: pointer;
  z-index: 100;
  color: #2f86c6;
  font-size: 1.8rem;
  padding: 0.8rem;
  background-color: transparent;
  border-radius: 3px;
  &:hover {
    background-color: #2f86c6;
    color: white;
  }
  ${media.lessThan("phone")`
     bottom: 5%;
  `};
`;

const pages = [
  style => (
    <animated.div>
      <Works
        style={{ opacity: style.display }}
        bg={projectImg1}
        title="Lake areal view"
        description="Pellentesque viverra urna eu hendrerit lobortis. In quis auctor felis,
            vel consectetur massa. Morbi ac rutrum dolor. Aenean at justo
            hendrerit, cursus elit eget, congue ligula."
      />
    </animated.div>
  ),
  style => (
    <animated.div>
      <Works
        style={{ opacity: style.display }}
        bg={projectImg2}
        title="Marriage couple"
        description=" Morbi ac rutrum dolor. Aenean at justo
            hendrerit, cursus elit eget, congue ligula."
      />
    </animated.div>
  ),
  style => (
    <animated.div>
      <Works
        style={{ opacity: style.display }}
        bg={projectImg3}
        title="Lake view"
        description="Aenean at justo
            hendrerit, cursus elit eget, congue ligula.
            In quis auctor felis,
            vel consectetur massa. Morbi ac rutrum dolor."
      />
    </animated.div>
  )
];

class Landing extends Component {
  state = { index: 0 };
  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1
    }));

  render() {
    const { index } = this.state;
    return (
      <Fragment>
        <Header />
        <About />
        <WorksContainer>
          <WorkImageDescLink onClick={this.toggle}>
            Load more projects &rarr;
          </WorkImageDescLink>
          <Transition
            config={config.default}
            from={{ display: "none" }}
            enter={{ display: "block" }}
            leave={{ display: "none" }}
          >
            {pages[index]}
          </Transition>
        </WorksContainer>
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Landing;
