import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BackgroundPhoto from "./src/background2.png";
import DipoeLogo from "./src/logo.png";

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

const Logo = styled.img`
  width: auto;
  height: 10em;
  margin: 3em;
  @media (max-width: 720px) {
    max-width: 90vw;
    height: auto;
  }
`;

const Text = styled.h1`
  width: auto;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 2em;
  color: white;
  text-align: center;
  @media (max-width: 720px) {
    max-width: 90vw;
    text-align: center;
  }
`;

const Rules = () => {
  const navigate = useNavigate();
  return (
    <Frame>
      <Logo src={DipoeLogo} onClick={() => navigate("/")} />
      <Text>
        Administratorem waszych danych osobowych jest MICHAŁ ZDRZAŁEK wraz z
        grupą DIPOE. <br />
        <br />W razie wszelkich pytań oraz problemów prosimy dzwonić na numer
        telefonu <br /> +48 726 102 425
        <br />
        <br />
        W sprawie zwrotów proszę o kontakt na numer podany powyżej
        <br />
        Cena płyty to 40pln + dostawa 15pln
        <br />
        <br />
        Jebać disa i z fartem wariaty
      </Text>
    </Frame>
  );
};

export default Rules;
