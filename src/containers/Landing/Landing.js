import React, { Component, Fragment } from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/footer";
import About from "../../components/AboutSection/aboutSection";
import Works from "../../components/WorkSection/workSection";
import Contact from "../../components/ContactSection/contactSection";

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Works />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Landing;
