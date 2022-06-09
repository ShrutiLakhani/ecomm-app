import "./App.css";
import { Navbar } from "./Components/index.js";
import { Routes, Route, Link } from "react-router-dom";
import {
  HomePage,
  SignupPage,
  LoginPage,
  ProductPage,
  WishlistPage,
  CartPage,
} from "./Pages/index.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="product" element={<ProductPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}
export default App;
