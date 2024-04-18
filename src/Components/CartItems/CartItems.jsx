import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopCatX";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from "axios";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://661bfccee7b95ad7fa697651.mockapi.io/first/clothes');
        setApiData(response.data);
        
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures that this effect runs only once on component mount
  return (
    <div className="scale-90">
      <div className="grid grid-cols-6">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {apiData.map(e => {

        if (cartItems[e.id] > 0) {

          return (
            <div key={e.id}>
              <div className="grid grid-cols-6 items-center shadow py-5">
                <img className="h-16" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-10 h-10 shadow-xl border rounded-lg bg-slate-100">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="grid grid-cols-2 mt-20">
        <div className="w-8/12">
          <h1 className="text-2xl font-semibold py-5">cart Totals</h1>
          <div>
            <div className="flex justify-between py-3">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border border-y-neutral-300" />
            <div className="flex justify-between py-3">
              <p>Shipping free</p>
              <p>Free</p>
            </div>
            <hr className="border border-y-neutral-300" />
            <div className="flex justify-between py-3 font-medium">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="mt-5 py-3 px-2 bg-red-600 rounded text-slate-200">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div>
          <p className="text-gray-600">
            If you have a promo code, enter it here
          </p>
          <div className="flex w-8/12 my-5 pl-5  border rounded justify-between bg-slate-200 items-center">
            <input
              className="bg-transparent placeholder-black w-full"
              type="text"
              placeholder="promo code"
            />
            <button className="bg-black p-3 rounded-r text-slate-200  w6/12">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
