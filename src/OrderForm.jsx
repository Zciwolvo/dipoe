import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import BackgroundPhoto from "./src/background2.png";

const Order = styled.form`
  width: 60vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
  background-color: black;
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
  color: orangered;
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

const OrderForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [City, setCity] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Postal, setPostal] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");

  const [allFilled, setAllFilled] = useState(false);

  const Data = {
    Name: name,
    Surname: surname,
    City: City,
    Mail: Mail,
    Phone: Phone,
    Postal: Postal,
    Address1: Address1,
    Address2: Address2,
  };

  const navigate = useNavigate();

  return (
    <OrderBackground>
      <Order onSubmit={allFilled ? navigate("/payment") : ""}>
        <Row>
          <SingleInput
            fieldName={"Imię:"}
            fieldValue={name}
            setFieldName={setName}
          />
          <SingleInput
            fieldName={"Nazwisko:"}
            fieldValue={surname}
            setFieldName={setSurname}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Adres e-mail:"}
            fieldValue={Mail}
            setFieldName={setMail}
          />
          <SingleInput
            fieldName={"Numer telefonu:"}
            fieldValue={Phone}
            setFieldName={setPhone}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Miasto:"}
            fieldValue={City}
            setFieldName={setCity}
          />
          <SingleInput
            fieldName={"Kod pocztowy:"}
            fieldValue={Postal}
            setFieldName={setPostal}
          />
        </Row>
        <Row>
          <SingleInput
            fieldName={"Ulica:"}
            fieldValue={Address1}
            setFieldName={setAddress1}
          />
          <SingleInput
            fieldName={"Numer budynku:"}
            fieldValue={Address2}
            setFieldName={setAddress2}
          />
        </Row>

        <PaymentButton
          id="submit"
          style={{ textDecoration: "none" }}
          onClick={() => {
            if (
              (name !== "") &
              (surname !== "") &
              (City !== "") &
              (Mail !== "") &
              (Phone !== "") &
              (Postal !== "") &
              (Address1 !== "") &
              (Address2 !== "")
            )
              setAllFilled(true);
          }}
        >
          <span id="button-text">Przejdź do płatności</span>
        </PaymentButton>
        <Link to="/inperson" style={{ textDecoration: "none" }}>
          <InputText style={{ margin: "0.5em", textDecoration: "none" }}>
            Preferujesz odbiór osobisty na terenie Rybnika?
          </InputText>
        </Link>
      </Order>
    </OrderBackground>
  );
};

export default OrderForm;
