import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/footer";
import About from "../../components/AboutSection/aboutSection";
import Works from "../../components/WorkSection/workSection";
import Contact from '../../components/ContactSection/contactSection';

const Wrapper = styled.div`

`;

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <About />
        <Works />
        <Contact />
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;

