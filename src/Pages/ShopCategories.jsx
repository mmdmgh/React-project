import React from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/item";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import men_banner from '../Components/Assets/banner_mens.png'
import women_banner from '../Components/Assets/banner_women.png'
import kids_banner from '../Components/Assets/banner_kids.png'

const banners = {
  men:men_banner,
  women:women_banner,
  kids: kids_banner
}

const ShopCategories = () => {
  const {category} = useParams();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://661bfccee7b95ad7fa697651.mockapi.io/first/clothes`
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
      <div className="scale-90">
        <img src={banners[category]} alt="" />
      </div>
      <div className="flex w-full justify-between"> 
        <p className="ml-20">
          <span className="font-semibold">Showing 1-12</span> products out of 36
          products
        </p>
        <div className="flex mr-32 border rounded-full py-1 px-4 items-center gap-2 font-medium">
          sort by <img className="w-3 h-2"  src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 scale-90">
        {apiData.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="border rounded-full py-3 px-5 bg-slate-400 font-medium">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategories;
