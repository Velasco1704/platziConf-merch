import React from 'react';
//Context
import { useAppContext } from "../context/AppContext";
//Hooks
import { useGoogleAddress } from '../hooks/useGoogleAddress';
//Components
import { Map } from '../components/Map';
//Styles
import '../styles/Success.css';

export const Success = () => {
const { state } = useAppContext();
const { buyer } = state;
const location = useGoogleAddress(buyer[0].city);
  return (
    <div className='Success'>
      <div className="Success-content">
        <h2>{`Gracias por tu compra ${buyer.name}`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};