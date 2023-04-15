import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import "./App.css";

import Homepage from "./home";
import Purchase from "./purchase";
import Final from "./final";
import Transaction from "./Transaction";
import Payment from "./Payment";
import Failure from "./failure";
import Rules from "./rules";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export default function App() {
  const [state, setState] = useState(true);
  const [subpage, setSubpage] = useState(1);
  const [price, setPrice] = useState(2000);
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [topic, setTopic] = useState("");

  const [allFilled, setAllFilled] = useState(false);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Router>
        <HttpsRedirect>
          <Routes>
            <Route
              path="/"
              element={
                state ? (
                  <Homepage setState={setState} />
                ) : (
                  <Purchase setState={setState} count={count} />
                )
              }
            />
            <Route path="/rules" element={<Rules />} />
            <Route
              path="/form"
              element={
                <Transaction
                  props={{
                    subpage: subpage,
                    setSubpage: setSubpage,
                    name: name,
                    surname: surname,
                    city: city,
                    mail: mail,
                    phone: phone,
                    postal: postal,
                    address1: address1,
                    address2: address2,
                    setName: setName,
                    setSurname: setSurname,
                    setCity: setCity,
                    setMail: setMail,
                    setPhone: setPhone,
                    setPostal: setPostal,
                    setAddress1: setAddress1,
                    setAddress2: setAddress2,
                    allFilled: allFilled,
                    setAllFilled: setAllFilled,
                    topic: topic,
                    setTopic: setTopic,
                    setPrice: setPrice,
                  }}
                />
              }
            />
            <Route
              path="/payment"
              element={<Payment setCount={setCount} price={price} />}
            />
            <Route path="/success" element={<Final setCount={setCount} />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </HttpsRedirect>
      </Router>
    </div>
  );
}
