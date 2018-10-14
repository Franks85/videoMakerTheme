import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 40vh;
  background-color: #242222;
  display: flex;
  position: relative;
`;

const Linkbox = styled.div`
  flex: 1;
  padding: 8rem;
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2.5rem;
  align-items: center;
`;

const Link = styled.a`
  transition: all .5s;
  &:link, &:visited {
    font-size: 1.4rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    background-color: rgba(255,255,255, .05);
    padding: 1.3rem;
  }
  &:hover, &:active {
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
  transition: all .5s;
  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: #b7ccff;
  }
`;

const footer = () => {
  return (
    <Wrapper>
      <Linkbox>
        <LinkList>
          <Link href='#'>Team</Link>
          <Link href='#'>Credit</Link>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Facebook</Link>
            <Link href='#'>Linkedin</Link>
            <Link href='#'>Instagram</Link>
        </LinkList>
      </Linkbox>
      <CopyrightBox>
        <CopyrightText>&copy; 2018 Frank Design</CopyrightText>
      </CopyrightBox>
    </Wrapper>
  );
};

export default footer;
