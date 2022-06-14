import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./home";
import Purchase from "./purchase";
import Payment from "./Payment";
import OrderForm from "./OrderForm";
import ClaimForm from "./selfclaim";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export default function App() {
  const [state, setState] = useState(true);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Router>
        <Routes>
          <Route
            path="/dipoe"
            element={
              state ? (
                <Homepage setState={setState} />
              ) : (
                <Purchase setState={setState} />
              )
            }
          />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/inperson" element={<ClaimForm />} />
        </Routes>
      </Router>
    </div>
  );
}
