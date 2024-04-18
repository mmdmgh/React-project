import React, { createContext, useState,useEffect } from "react";
import axios from "axios";



export const ShopContext = createContext({});



const ShopContextProvider = (props) => {
  const [apiData, setApiData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://661bfccee7b95ad7fa697651.mockapi.io/first/clothes`
        );
        setApiData(response.data);

        const getDefaultCart = () => {
          let cart = [];
          for (let index = 0; index <= response.data.length; index++) {
            cart[index] = 0;
          }
          return cart;
        };
        setCartItems(getDefaultCart())

      } catch (error) {
        console.error("Error fetching API data:", error);
      }

    };
   

    fetchData();
  }, []);

  


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      console.log(item);
      if (cartItems[item] > 0) {
        let itemInfo = apiData.find(
          (product) => product.id === item
        );

        totalAmount += itemInfo.new_price * cartItems[item];
       
      }
      
    }
    
    return totalAmount;
  };

  const numberOfProducts = () => {
    let amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        amount += cartItems[item];
      }
    }
    return amount;
  };


  

  const contextvalue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    numberOfProducts,
  };

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
