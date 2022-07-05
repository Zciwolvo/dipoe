import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import BackgroundPhoto from "./src/background2.png";

const Order = styled.form`
  width: 65vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
  background-color: black;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 90vw;
    min-width: 0;
    overflow-y: scroll;
    height: 100vh;
  }
`;

const OrderBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundPhoto});
`;

const Input = styled.input`
  border-radius: 10px;
  border: solid 1px;
  width: 100%;
  height: 3em;
  padding-left: 1em;
  background-color: grey;
  color: black;
  @media (max-width: 720px) {
    width: 80vw;
    min-width: 0;
  }
`;

const InputSegment = styled.div`
  width: 100%;
  margin: 1em;
  @media (max-width: 720px) {
    width: 90vw;
    margin: 0;
  }
`;

const InputText = styled.p`
  height: auto;
  font-family: Arial, sans-serif;
  font-size: 1.5em;
  color: white;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
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
  margin-left: 0.5em;
  :hover {
    filter: contrast(115%);
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
  @media (max-width: 720px) {
    width: 85vw;
    min-width: 0;
    margin-left: 0;
  }
`;

const SingleInput = (props) => {
  return (
    <InputSegment>
      <InputText>{props.fieldName}</InputText>
      <Input
        value={props.fieldValue}
        onChange={(e) => props.setFieldName(e.target.value)}
        type="text"
        required
      />
    </InputSegment>
  );
};

const OrderForm = (props) => {
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (props.props.allFilled) {
      localStorage.setItem("topic", "Nowy zakup z dostawą do domu.");
      localStorage.setItem("name", props.props.name);
      localStorage.setItem("surname", props.props.surname);
      localStorage.setItem("mail", props.props.mail);
      localStorage.setItem("phone", props.props.phone);
      localStorage.setItem("city", props.props.city);
      localStorage.setItem("postal", props.props.postal);
      localStorage.setItem("address1", props.props.address1);
      localStorage.setItem("address2", props.props.address2);
      fetch(`${process.env.API_ENDPOINT}/send_mail_to_sender`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: localStorage.getItem("topic") + " " + "DO WERYFIKACJI",
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
      navigate("/payment");
    }
  };

  const changeValues = () => {
    props.setPrice(3999);
    props.setSubpage(1);
  };

  return (
    <OrderBackground>
      <Order onSubmit={handleSubmit}>
        <Row>
          <SingleInput
            fieldName={"Imię:"}
            fieldValue={props.props.name}
            setFieldName={props.props.setName}
          />
          <SingleInput
            fieldName={"Nazwisko:"}
            fieldValue={props.props.surname}
            setFieldName={props.props.setSurname}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Adres email:"}
            fieldValue={props.props.mail}
            setFieldName={props.props.setMail}
          />
          <SingleInput
            fieldName={"Numer telefonu:"}
            fieldValue={props.props.phone}
            setFieldName={props.props.setPhone}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Miasto:"}
            fieldValue={props.props.city}
            setFieldName={props.props.setCity}
          />
          <SingleInput
            fieldName={"Kod pocztowy:"}
            fieldValue={props.props.postal}
            setFieldName={props.props.setPostal}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Ulica:"}
            fieldValue={props.props.address1}
            setFieldName={props.props.setAddress1}
          />
          <SingleInput
            fieldName={"Numer budynku / Numer mieszkania:"}
            fieldValue={props.props.address2}
            setFieldName={props.props.setAddress2}
          />
        </Row>

        <Row
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "0.5em",
          }}
        >
          <Input
            style={{ width: "50px" }}
            type="checkbox"
            onClick={() => setCheck(!check)}
            required
          />
          <InputText>Po zakończeniu płatności powrócę do strony.</InputText>
        </Row>

        <PaymentButton
          id="submit"
          style={{ textDecoration: "none" }}
          onClick={() => {
            if (
              (props.props.name !== "") &
              (props.props.surname !== "") &
              (props.props.city !== "") &
              (props.props.mail !== "") &
              (props.props.phone !== "") &
              (props.props.postal !== "") &
              (props.props.address1 !== "") &
              (props.props.address2 !== "") &
              (check === true)
            )
              props.props.setAllFilled(true);
          }}
        >
          <span id="button-text">Przejdź do płatności</span>
        </PaymentButton>

        <InputText style={{ margin: "0.5em", textDecoration: "none" }}>
          <Link
            to=""
            onClick={() => changeValues()}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Preferujesz odbiór osobisty na terenie Rybnika?{" "}
          </Link>
        </InputText>
        <InputText
          style={{ fontSize: "1em", margin: "1em", textDecoration: "none" }}
        >
          *W przypadku dostawy poza teren Rybnika dochodzi dodatkowa opłata za
          przesyłkę.
        </InputText>
      </Order>
    </OrderBackground>
  );
};

export default OrderForm;
