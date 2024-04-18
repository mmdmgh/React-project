import React from "react";
import Item from "../item/item";
import axios from "axios";
import { useEffect, useState } from "react";

const Popular = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://661bfccee7b95ad7fa697651.mockapi.io/first/clothes"
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center group max-w-xl">
        <h1 className="text-2xl p-10 font-semibold flex items-center justify-center">
          POPULAR IN WOMAN
        </h1>
        <hr className="w-52 h-2  bg-black rounded-full group-hover:w-64 duration-300" />
      </div>
      <div className="flex scale-75">
        {apiData.map((item, i) => {

          if (item.id<=4) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
            
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
