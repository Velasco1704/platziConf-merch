import React from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
//Context
import { useAppContext } from "../context/AppContext";
//Styles
import "../styles/Payment.css";

export const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useAppContext();
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      "AVX1sNB4x6-fM2c_5jTbqz2-trfnLoy3zBizP5iKu-hAJCuc3MaDlv89AgsaiWpNPGHMqmN5npClwCHc",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: handleSumTotal(),
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (data) {
      handlePaymentSuccess(data);
    });
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            // amount={handleSumTotal}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            // onStart={() => console.log("start payment")}
            // onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};
