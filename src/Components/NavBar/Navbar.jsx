import { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopCatX";
function Navbar() {
  const [activated, setactivated] = useState("shop");
  const {numberOfProducts} = useContext(ShopContext)

  return (
    <div className="flex justify-around p-4 shadow ">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className="text-gray-800 text-2xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-12 text-gray-600 text-base font-medium">
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer	"
          onClick={() => {
            setactivated("shop");
          }}
        >
          <Link to="/">Shop</Link>{" "}
          {activated === "shop" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl	bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer	"
          onClick={() => {
            setactivated("men");
          }}
        >
          <Link to="/men">Men</Link>{" "}
          {activated === "men" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl	bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer	"
          onClick={() => {
            setactivated("women");
          }}
        >
          <Link to="/women">Woman</Link>{" "}
          {activated === "women" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl	bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer	"
          onClick={() => {
            setactivated("kids");
          }}
        >
          <Link to="/kids">Kids</Link>{" "}
          {activated === "kids" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl	bg-red-600" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Link to="/login">
          <button className="w-20 h-12 rounded-3xl text-gray-700 font-medium text-lg cursor-pointer border border-sky-950 active:bg-slate-200 py-1">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="flex text-white w-4 h-4 rounded-full justify-center items-center -mt-10 -ml-8 text-sm bg-red-600">
          {numberOfProducts()} 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
