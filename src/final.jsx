import React from "react";
import styled from "styled-components";

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

const Final = () => {
  return (
    <Frame>
      <Text>Dziękujemy za zakup! </Text>
      <Text>
        Właśnie wydałeś równowartość Rybnickiego chemola na coś co wykręci cię
        jeszcze bardziej.{" "}
      </Text>
      <Text>STOP NARKOMANII!</Text>
      <Text>DIPOE pozdrawia 2 + 5 = 7</Text>
    </Frame>
  );
};

export default Final;
