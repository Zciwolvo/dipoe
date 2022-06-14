import React, { useState } from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";

import BackgroundPhoto from "./src/background2.png";
import DipoeLogo from "./src/logo.png";
import CoverPhoto from "./src/disc.jpg";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  align-content: center;
  background-image: url(${BackgroundPhoto});
  background-repeat: repeat;
  background-position: center;
  overflow-x: hidden;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50em;
  height: auto;
  align-items: center;
`;

const Logo = styled.img`
  width: auto;
  height: 10em;
  margin: 3em;
  @media (max-width: 720px) {
    max-width: 90vw;
    height: auto;
  }
`;

const Cover = styled.img`
  width: 40%;
  height: auto;
  :hover {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px #fff, 0 0 10px #ffffff, 0 0 15px #ffffff,
      0 0 20px #ffffff, 0 0 30px #ffffff;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    width: 60vw;
  }
`;

const Header = styled.h1`
  width: auto;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 3em;
  color: white;
  :hover {
    cursor: pointer;
    text-shadow: 0 0 5px #fff, 0 0 10px #ffffff, 0 0 15px #ffffff,
      0 0 20px #ffffff, 0 0 30px #ffffff;
  }
  @media (max-width: 720px) {
    max-width: 90vw;
    text-align: center;
  }
`;

const Homepage = (props) => {
  return (
    <Frame>
      <Logo src={DipoeLogo} onClick={() => props.setState(true)} />
      <Column>
        <Cover src={CoverPhoto} onClick={() => props.setState(false)} />
        <Header onClick={() => props.setState(false)}>
          DIPOE - ,,2+5=7ʼʼ (PREORDER)
        </Header>
      </Column>
    </Frame>
  );
};

export default Homepage;
