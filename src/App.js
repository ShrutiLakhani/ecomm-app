import "./App.css";
import {HeroSection, Navbar} from "./Components/index.js"
import { Routes, Route, Link } from "react-router-dom";
import {
  HomePage,
  SignupPage,
  LoginPage
} from "./Pages/index.js";

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductPage />} />  */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} /> 
        </Routes>
    </div>
    </>
  )
}
export default App;