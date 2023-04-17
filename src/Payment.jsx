import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import styled from "styled-components";

import CheckoutForm from "./CheckoutForm";
import BackgroundPhoto from "./src/background2.png";

const CardPayment = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundPhoto});
  pointer-events: none;
  @media (max-width: 720px) {
    width: 100vw;
    min-width: 0;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;
const iframe = styled.div`
  pointer-events: none;
`;

const stripe_public = `${process.env.REACT_APP_STRIPE_PROMISE}`;

const stripePromise = loadStripe(stripe_public);

export default function Payment({ setCount, price }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret: clientSecret,
    appearance,
  };

  return (
    <CardPayment className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} setCount={setCount} />
        </Elements>
      )}
    </CardPayment>
  );
}
