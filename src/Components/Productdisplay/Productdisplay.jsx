import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopCatX";
import axios from "axios";

const Productdisplay = () => {
  const  {productId}  = useParams();
  const { addToCart, dynamicImage } = useContext(ShopContext);
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
    <div className="grid grid-cols-2">
      {/* left */}
      <div className="flex scale-110">
        {/* images */}
          <div className="w-20 mt-10 ml-40 mr-3 ">
            <img className="mb-3 " src={apiData.image} alt="" />
            <img className="mb-3 " src={apiData.image} alt="" />
            <img className="mb-3 " src={apiData.image} alt="" />
            <img className="mb-3 " src={apiData.image} alt="" />
          </div>
        {/* main image */}
        <div className="mt-10">
          <img className="w-80" src={apiData.image} alt="" />
        </div>
      </div>
      {/* right */}
      <div className="mt-10 max-w-2xl">
        <h1 className="text-2xl font-semibold">{apiData.name}</h1>
        {/* star */}
        <div className="flex class ">
          <img className="w-6 scale-75" src={star_icon} alt="" />
          <img className="w-6 scale-75" src={star_icon} alt="" />
          <img className="w-6 scale-75" src={star_icon} alt="" />
          <img className="w-6 scale-75" src={star_icon} alt="" />
          <img className="w-6 scale-75 mr-3" src={star_dull_icon} alt="" />
          <p> (122)</p>
        </div>
        <div className="flex gap-4 mt-5">
          {/* price */}
          <div className="line-through text-gray-500 font-semibold">
            ${apiData.old_price}
          </div>
          <div className="font-semibold text-red-600">${apiData.new_price}</div>
        </div>
        {/* description */}
        <div className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
          incidunt consequatur assumenda dolor possimus commodi eligendi
          explicabo praesentium similique?
        </div>
        <div>
          <h1 className="mt-3 font-medium">Select Size</h1>
          <div className="flex gap-5 mt-3">
            <div>
              <div className="flex justify-center items-center relative transition-all duration-[450ms] ease-in-out w-80">
                <article className="flex border border-solid border-gray-700 w-full ease-in-out duration-500 left-0 rounded-2xl shadow-lg shadow-black/15 bg-white">
                  <label
                    htmlFor="dashboard"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl font-semibold cursor-pointer"
                  >
                    <input
                      className="hidden peer/expand"
                      type="radio"
                      name="path"
                      id="dashboard"
                    />
                    S
                  </label>
                  <label
                    htmlFor="profile"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl font-semibold cursor-pointer"
                  >
                    <input
                      className="hidden peer/expand"
                      type="radio"
                      name="path"
                      id="profile"
                    />
                    M
                  </label>
                  <label
                    htmlFor="messages"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl font-semibold cursor-pointer"
                  >
                    <input
                      className="hidden peer/expand"
                      type="radio"
                      name="path"
                      id="messages"
                    />
                    L
                  </label>
                  <label
                    htmlFor="help"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl font-semibold cursor-pointer"
                  >
                    <input
                      className="hidden peer/expand"
                      type="radio"
                      name="path"
                      id="help"
                    />
                    XL
                  </label>
                  <label
                    htmlFor="settings"
                    className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl font-semibold cursor-pointer"
                  >
                    <input
                      className="hidden peer/expand"
                      type="radio"
                      name="path"
                      id="settings"
                    />
                    XXL
                  </label>
                </article>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(apiData.id);
          }}
          className="mt-5 py-3 px-6 bg-red-600 rounded-xl text-slate-100 font-medium"
        >
          ADD TO CART
        </button>
        <p className="mt-16">
          <span className="font-medium">Category :</span>Women , T-Shirt, Crop
          Top
        </p>
        <p className="mt-2">
          <span className="font-medium">Tags :</span>Modern , Latest,{" "}
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
