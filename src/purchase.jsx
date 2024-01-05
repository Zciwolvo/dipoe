import React from "react";
import styled from "styled-components";

import BackgroundPhoto from "./src/background2.png";
import DipoeLogo from "./src/logo.png";
import CoverPhoto from "./src/hiperrealizm.jpg";
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
            Przedstawiamy drugi longplay DIPOE ,,hiperrealizm", materiał zrealizowany w kilkukrotnie lepszej jakości niż poprzednie wydania (chyba).. <br />
            <br />
            TRACKLISTA
          </Text>
          <Row style={{ width: "30em" }}>
            <Text>
              <br />1.zimno
              <br />2.północ
              <br />3.2%
              <br />4.nie warto
              <br />5.tekstury
              <br />6.hiperrealizm
              <br />7.handlarz zegarkami
              <br />8.rymotechnika
              <br />9.comic sans
              <br />10.ile ci potrzeba
              <br />11.o co chodzi
              <br />12. kłamstwa,bogacze i modlitwy
              <br />13.lato z tpr
              <br />14.więcej
              <br />15.do snu
              <br />16.niech to nie gaśnie
              <br />17.łapie tróje
              <br />18.namaste
              <br />19.chodź tu
              <br />20.zabij ją (First Official Dipoe Recording,2020)[BONUS TRACK]
              <br />
              <br />W ramach preorderu do płyty dołączone są:
              <br />-podpisy na wewnetrznej stronie okladki
              <br />-magnes z logo
              <br />-szablon do graffiti z logo
              <br />-może coś jeszcze
            </Text>
          </Row>
          <Text style={{ marginBottom: "10em" }}>
            <br />
            Cena preorderu to 59.99PLN
            <br />
            <br />
            Za całośc materiały odpowiadają autorzy. Nagrania odbywały się w DIPOE HOME QRWA STUDIO a nagrywaniem płyt zajęło się SZASTA INC. Wszelkie prawa zastrzeżone do czasu az nie wykorkujemy potem robcie z tym gównem co chcecie. <br />{" "}
            <br /> 2+5=7 <br />
            <br /> ©℗ DIPOE 2022
          </Text>
        </Column>
      </Row>
    </Frame>
  );
};

export default Purchase;
