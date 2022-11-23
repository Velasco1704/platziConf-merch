import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = ({ data }) => {

  const mapStyles = {
    height: '50vh',
    width: '100%',
  }
  const defaultCenter = {
    lat: data.latitude,
    lng: data.longitude
  }
  console.log(data);
  console.log(defaultCenter)

  return (
    <LoadScript googleMapsApiKey='AIzaSyDRWLiGNwVdpsphusyiMfpkNm1iOdG6Q4g'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};