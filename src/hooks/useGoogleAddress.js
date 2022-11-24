import { useState, useEffect } from "react";
import axios from "axios";

export const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=c46c171ff956053ec24ed860ec9236d5&query=${address}`;
  // const API = `http://api.positionstack.com/v1/forward?access_key=c46c171ff956053ec24ed860ec9236d5&query=${country}, ${city}, ${address}`;
  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios(API)
      setMap(res.data.data[0]);
    }
    fetchData();
  }, []);
  console.log(map)
  return map;
};
