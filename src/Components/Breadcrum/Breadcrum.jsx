import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Breadcrum = () => {
  const  {productId}  = useParams();

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://661bfccee7b95ad7fa697651.mockapi.io/first/clothes/${productId}`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
   

    fetchData();
  }, [productId]);
   
  return (
    <div className='flex items-center ml-40 text-xs'>
        Home <img className='h-4' src={arrow_icon} alt="" /> Shop  <img className='h-4' src={arrow_icon} alt="" /> {apiData.category}   <img className='h-4' src={arrow_icon} alt="" />{apiData.name}
    </div>
  )
}

export default Breadcrum