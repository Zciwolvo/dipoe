const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const path = require("path");
const Mail = require("nodemailer/lib/mailer");
const PORT = process.env.PORT || 4242;

app.use(express.static(path.resolve(__dirname, "./build")));
app.use(express.json());

app.post("/create-payment-intent", async(req, res) => {
    // Create a PaymentIntent with the order amount and currency
    var price = req.body.price;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "pln",
        payment_method_types: ["card", "p24"],
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail_to_receiver", cors(), async(req, res) => {
    var receiver = req.body.receiver;

    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: receiver,
        subject: "Zakup płyty DIPOE",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Dziękujemy!</h2>
        <p>Twój zakup został przez nas odebrany.</p>
        <p>Proszę oczekiwać dalszego kontaktu na numer telefonu lub adres email podane w formularzu.</p>
        
        <p>Ekipa DIPOE</p>
         </div>
    `,
    });
    console.log("Mail sent to receiver!");
});

app.post("/send_mail_to_sender", cors(), async(req, res) => {
    var topic = req.body.topic;
    var receiver = req.body.receiver;
    var Name = req.body.Name;
    var Surname = req.body.Surname;
    var City = req.body.City;
    var Phone = req.body.Phone;
    var Postal = req.body.Postal;
    var Address1 = req.body.Address1;
    var Address2 = req.body.Address2;

    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "dipoeone@gmail.com",
        subject: topic,
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Dane klienta:</h2>
        <p>Imie nazwisko: ${Name} ${Surname}</p>
        <p>Numer telefonu: ${Phone}</p>
        <p>Adres email: ${receiver}</p>
        <p>Dane do wysyłki</p>
        <p>${City}, ${Postal}, ${Address1}/${Address2}</p>
         </div>
    `,
    });

    console.log("Mail sent to sender!");
});

var count = 173;
app.post("/get_data", async(req, res) => {
    res.send({
        cd_number: count,
    });
});

app.post("/substract_cd", async(req, res) => {
    count -= 1;
    res.send({
        cd_number: count,
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));