const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
    "sk_test_51L7nq8GOhLaGDHrE8NdbFkg6DlmKINK8m7RWLt02itff4JznaW736vqsrCQwIP5Qr1wm2S8XX5Amol0kQTz3pEnh002Sx9L5YB"
);

const path = require("path");
const port = process.env.PORT || 4242;
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));
app.use(express.json());

app.post("/create-payment-intent", async(res) => {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000,
        currency: "pln",
        payment_method_types: ["card", "p24"],
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

if (process.env.NODE_ENV === "production") {
    // Exprees will serve up production assets
    app.use(express.static("client/build"));

    // Express serve up index.html file if it doesn't recognize route
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => console.log(`Node server listening on port ${port}!`));