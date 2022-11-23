import React from "react";
import { Link } from "react-router-dom";
//Context
import { useAppContext } from "../context/AppContext";
//styles
import "../styles/Checkout.css";

export const Checkout = () => {
  const { state, removeFromCart } = useAppContext();
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? "Lista de Pedidos:" : "Sin Pedidos"}</h3>
        {cart.map((item) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to={"/checkout/information"}>
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};
