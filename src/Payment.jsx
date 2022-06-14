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

const stripePromise = loadStripe(
  "pk_test_51L7nq8GOhLaGDHrE7hkowuhV2dhw6EOf7jl9UPRzJ7Akc0X7zE9uobgJGYuyImCD7tNnGTULhZ436Sd3X0bT4Bwc00vBTZAllM"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "CD" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <CardPayment className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </CardPayment>
  );
}
