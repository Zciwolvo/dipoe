import React from "react";
import styled from "styled-components";

import BackgroundPhoto from "./src/background2.png";
import DipoeLogo from "./src/logo.png";
import CoverPhoto from "./src/hiperrealizm.jpg";
import { useNavigate } from "react-router-dom";

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
  width: 60%;
  height: auto;
  margin: 2em 0 4em 0;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  :hover {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px #fff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff;
    transform: scale(1.05);
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

const Text = styled.button`
  max-width: 30vw;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 1.5em;
  color: white;
  margin: 0;
  text-shadow: 1px 1px 1px white;
  @media (max-width: 720px) {
    max-width: 90vw;
  }
`;

const BottomText = styled.h1`
  position: absolute;
  bottom: 1em;
  right: 2em;
  width: auto;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 2em;
  color: white;
  align-items: flex-end;
  justify-content: end;
  :hover {
    cursor: pointer;
    text-shadow: 0 0 5px #fff, 0 0 10px;
  }
  @media (max-width: 720px) {
    max-width: 90vw;
    text-align: center;
    right: auto;
  }
  @media (max-height: 800px) {
    max-width: 90vw;
    position: relative;
    margin-top: 2em;
  }
`;

const Homepage = (props) => {
  const navigate = useNavigate();

  return (
    <Frame>
      <Logo src={DipoeLogo} onClick={() => props.setState(true)} />
      <Column>
        <Cover src={CoverPhoto} onClick={() => props.setState(false)} />
        <Header style={{marginBottom: "-1em"}} onClick={() => props.setState(false)}>
        05.02.2024
        </Header>
        <Header onClick={() => props.setState(false)}>
          DIPOE - hiperrealizm
        </Header>
        <Text onClick={() => props.setState(false)}>Kup teraz</Text>
      </Column>
      <BottomText onClick={() => navigate("/rules")}>Regulamin</BottomText>
    </Frame>
  );
};

export default Homepage;
