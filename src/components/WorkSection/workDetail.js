import React from "react";
import styled from "styled-components";
import { Transition, animated, config } from "react-spring";
import { Icon, absolute, elevation, transition } from "../../Utilities";

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalCard = styled(animated.div)`
  background: white;
  border-radius: 5px;
  padding: 1.5rem;
  margin: 0 auto;
  color: #000;
  position: relative;
  width: 80%;
  height: 80%;
  z-index: 10;
  ${elevation[4]};
  ${transition({
    property: "box-shadow"
  })};
  &:hover {
    ${elevation[5]};
  }
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 2rem;
  ${absolute({
    y: "top",
    x: "right"
  })};
`;

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  z-index: 5;
`;

const workDetail = props => {
  const { children, toggle, on } = props;
  return (
    <Transition
      native
      config={config.gentle}
      from={{ opacity: 0, bgOpacity: 0, y: "-50px" }}
      enter={{ opacity: 1, bgOpacity: 0.7, y: "0px" }}
      leave={{ opacity: 0, bgOpacity: 0, y: "50px" }}
    >
      {on &&
        (styles => (
          <ModalWrapper>
            <ModalCard
              style={{
                transform: styles.y.interpolate(y => `translate3d(0, ${y}, 0)`),
                ...styles
              }}
            >
              <CloseButton onClick={toggle}>
                <Icon name="close" color="#fff" />
              </CloseButton>
              {children}
            </ModalCard>
            <Background
              style={{
                opacity: styles.bgOpacity.interpolate(bgOpacity => bgOpacity)
              }}
              onClick={toggle}
            />
          </ModalWrapper>
        ))}
    </Transition>
  );
};

export default workDetail;
