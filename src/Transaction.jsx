import React from "react";
import OrderForm from "./OrderForm";
import ClaimForm from "./selfclaim";

const Sub = [OrderForm, ClaimForm];

const Transaction = (props) => {
  const Current = Sub[props.props.subpage];
  return (
    <>
      <Current
        setSubpage={props.props.setSubpage}
        setPrice={props.props.setPrice}
        props={{
          name: props.props.name,
          surname: props.props.surname,
          city: props.props.city,
          mail: props.props.mail,
          phone: props.props.phone,
          postal: props.props.postal,
          address1: props.props.address1,
          address2: props.props.address2,
          setName: props.props.setName,
          setSurname: props.props.setSurname,
          setCity: props.props.setCity,
          setMail: props.props.setMail,
          setPhone: props.props.setPhone,
          setPostal: props.props.setPostal,
          setAddress1: props.props.setAddress1,
          setAddress2: props.props.setAddress2,
          allFilled: props.props.allFilled,
          setAllFilled: props.props.setAllFilled,
          topic: props.props.topic,
          setTopic: props.props.setTopic,
        }}
      />
    </>
  );
};

export default Transaction;
