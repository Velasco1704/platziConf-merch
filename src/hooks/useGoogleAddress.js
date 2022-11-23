import { useState, useEffect } from "react";
import axios from "axios";

export const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=c46c171ff956053ec24ed860ec9236d5&query=${address}`;
  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios(API)
      setMap(res.data.data[0]);
      // setMap({
      //   lag: res.data.data[0].latitude,
      //   lng: res.data.data[0].longitude,
      // })
    }
    fetchData();
    // const res = await axios(API);
  }, []);
  console.log(map)
  return map;
};
