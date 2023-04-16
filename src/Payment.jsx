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
  @media (max-width: 720px) {
    width: 100vw;
    min-width: 0;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

const stripe_public = `${process.env.REACT_APP_STRIPE_PROMISE}`;

const stripePromise = loadStripe(
  spk_test_51L7nq8GOhLaGDHrE7hkowuhV2dhw6EOf7jl9UPRzJ7Akc0X7zE9uobgJGYuyImCD7tNnGTULhZ436Sd3X0bT4Bwc00vBTZAllM
);

export default function Payment({ setCount, price }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`http://127.0.0.1:5000/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
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
