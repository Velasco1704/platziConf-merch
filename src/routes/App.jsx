import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";
//Containers
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Information } from "../containers/Information";
import { Payment } from "../containers/Payment";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
