import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategories from "./Pages/ShopCategories";
import Cart from "./Pages/Cart";
import Loginsignup from "./Pages/Loginsignup";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/:category" element={<ShopCategories />} />
        
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
