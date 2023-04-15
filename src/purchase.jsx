import React from "react";
import styled from "styled-components";

import BackgroundPhoto from "./src/background2.png";
import DipoeLogo from "./src/logo.png";
import CoverPhoto from "./src/disc2.jpg";
import { Link } from "react-router-dom";

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
  @media (min-width: 720px) {
    * {
      -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  width: 80em;
  height: auto;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 35em;
  height: auto;
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
  width: 35em;
  height: 35em;
  @media (max-width: 720px) {
    max-width: 90vw;
    height: 90vw;
  }
`;

const Text = styled.p`
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

const Button = styled.button`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  background-color: transparent;
  margin-top: 3em;
  align-items: center;
  justify-content: center;
  :hover {
    outline: none;
    border-color: white;
    box-shadow: 0 0 55px white;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    max-width: 90vw;
    margin-bottom: 5em;
  }
`;

const NumberText = styled.p`
  max-width: 100%;
  width: 100%;
  text-align: center;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 3em;
  color: white;
  margin: 0;
  text-shadow: 1px 1px 1px white;
  @media (max-width: 720px) {
    max-width: 90vw;
  }
`;

const Purchase = (props) => {
  return (
    <Frame>
      <Logo src={DipoeLogo} onClick={() => props.setState(true)} />
      <Row>
        <Column>
          <Cover src={CoverPhoto} />
          <Link to="/form" style={{ textDecoration: "none" }}>
            <Button>
              <Text>Zamów już teraz!</Text>
            </Button>
          </Link>
        </Column>
        <Column>
          <Text>
            NOWE WYDAWICTWO DIPOE Z OKAZJI PIĘKNEGO ŚWIĘTA. JAKIM JEST ŚWIATOWY
            DZIEŃ KSIAZKI OBCHODZONY 23 KWIETNIA. ŻARTOWAŁEM <br />
            <br />
            TRACKLISTA
          </Text>
          <Row style={{ width: "30em" }}>
            <Text>
              <br /> 1. MARIHUANA
              <br /> 2. BIG QTANG
              <br /> 3. KSIĄŻKI
              <br /> 4. 5 LAT ODSIADKI
              <br /> 5. ZAKOŁYSANIE
            </Text>
          </Row>
          <Text style={{ marginBottom: "10em" }}>
            <br />
            Cena płyty to 20pln
            <br />
            Za całość materiału w tym mastering odpowiadają autorzy.
            <br />
            Nagrania odbywały się w DIPOE HOME QRWA STUDIO a nagrywaniem płyt
            zajęło się SZASTA INC. Wszelkie prawa zastrzeżone. Ogólnie JD <br />{" "}
            <br /> 2+5=7 <br />
            <br /> ©℗ DIPOE 2022
          </Text>
        </Column>
      </Row>
    </Frame>
  );
};

export default Purchase;
