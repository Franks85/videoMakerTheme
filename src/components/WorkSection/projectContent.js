import React, { Component } from "react";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";
import { scaleout } from "../../styledComponents/keyframes";

const Wrapper = styled.div`
  background-color: #18191b;
  width: 100%;
  height: 100%;
  display: grid;
`;

const VideoBox = withReveal(
  styled.div`
    margin: auto;
    width: 80%;
    height: 80%;
    border-radius: 5px;
  `,
  <Zoom delay={300} />
);

const SpinnerContainer = styled.div`
  align-items: center;
  background-color: #18191b;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Spinner = styled.div`
  animation: ${scaleout} 1s infinite ease-in-out;
  background-color: white;
  border-radius: 100%;
  height: 6em;
  width: 6em;
`;

class ProjectContent extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({isLoading: !this.state.isLoading})
  }
  render() {
    const content = (
      <VideoBox>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vxl8clm4g20"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="senigallia video"
        />
      </VideoBox>
    );
    const spinner = (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
    return <Wrapper>{this.state.isLoading ? spinner : content}</Wrapper>;
  }
}

export default ProjectContent;
