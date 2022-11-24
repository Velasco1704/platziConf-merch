import React from "react";
import { Helmet } from "react-helmet";
//Components
import { Products } from "../components/Products";
//Image
import logo from "../assets/image-platzi.png";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Products</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DanielV00730600" />
        <meta name="twitter:creator" content="@DanielV00730600" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta name="twitter:image" content={logo} />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="platziconf-merch-bd910.web.app" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products />
    </>
  );
};
