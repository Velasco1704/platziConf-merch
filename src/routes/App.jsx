import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Home } from '../components/Home';
import { Checkout } from '../components/Checkout';
import { Information } from '../components/Information';
import { Payment } from '../components/Payment';
import { Success } from '../components/Success';
import { NotFound } from '../components/NotFound';
import "../styles/app.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/information" element={<Information />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/checkout/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
