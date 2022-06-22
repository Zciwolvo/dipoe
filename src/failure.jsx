import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BackgroundPhoto from "./src/background2.png";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  align-content: center;
  justify-content: center;
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

const Text = styled.p`
  max-width: 40vw;
  height: auto;
  font-family: "Amatic SC", cursive;
  font-size: 3em;
  color: white;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 1px white;
  @media (max-width: 720px) {
    max-width: 90vw;
    font-size: 1.5em;
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

const Failure = () => {
  return (
    <Frame>
      <Text>
        Z jakiegoś powodu transakcja nie powiodła się proszę spróbować ponownie.
      </Text>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>
          <Text>Powrót do strony głównej.</Text>
        </Button>
      </Link>
    </Frame>
  );
};

export default Failure;
