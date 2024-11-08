import React from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import { CheckoutSteps } from "../component/CheckoutSteps";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <>
      <CheckoutSteps step1={true} step2={true} step3={false} step4={false} />
      <FormContainer>
        <h1 className="my-3">Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="text"
              value={address}
              placeholder="Enter address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City:</Form.Label>
            <Form.Control
              type="text"
              value={city}
              placeholder="Enter city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code:</Form.Label>
            <Form.Control
              type="text"
              value={postalCode}
              placeholder="Enter postal code"
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              value={country}
              placeholder="Enter country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="btn btn-block my-4"
          >
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ShippingScreen;
