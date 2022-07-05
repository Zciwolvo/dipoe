import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = styled.form`
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
  @media (max-width: 720px) {
    width: 90vw;
    min-width: 0;
    padding: 3%;
  }
`;

const PaymentButton = styled.button`
  background: orangered;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
  margin-top: 1em;
  :hover {
    filter: contrast(115%);
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
  @media (max-width: 720px) {
    width: 90vw;
    min-width: 0;
  }
`;

const PaymentMessage = styled.div`
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
`;

export default function CheckoutForm({ setCount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          PaymentSuccess();
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          PaymentFailure();
          break;
        default:
          setMessage("Something went wrong.");
          PaymentFailure();
          break;
      }
    });
  }, [stripe]);

  const navigate = useNavigate();

  const PaymentSuccess = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}send_mail_to_sender`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: localStorage.getItem("topic") + " " + "ZWERYFIKOWANY",
        receiver: localStorage.getItem("mail"),
        Name: localStorage.getItem("name"),
        Surname: localStorage.getItem("surname"),
        City: localStorage.getItem("city"),
        Phone: localStorage.getItem("phone"),
        Postal: localStorage.getItem("postal"),
        Address1: localStorage.getItem("address1"),
        Address2: localStorage.getItem("address2"),
      }),
    }).then((res) => res.json());

    fetch(`${process.env.REACT_APP_API_ENDPOINT}send_mail_to_receiver`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receiver: localStorage.getItem("mail"),
      }),
    }).then((res) => res.json());

    fetch(`${process.env.REACT_APP_API_ENDPOINT}substract_cd`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCount(data.cd_number));
    navigate("/success");
  };

  const PaymentFailure = () => {
    navigate("/failure");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://dipoe.vercel.app/payment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <PaymentForm
      style={{ position: "absolute" }}
      id="payment-form"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" />
      <PaymentButton disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner" /> : "Zapłać"}
        </span>
      </PaymentButton>
      {/* Show any error or success messages */}
      {message && <PaymentMessage>{message}</PaymentMessage>}
    </PaymentForm>
  );
}
