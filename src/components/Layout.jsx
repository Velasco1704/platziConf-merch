import React from "react";
//Components
import { Header } from './Header';
import { Footer } from './Footer';
//Styles
import '../styles/Layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
