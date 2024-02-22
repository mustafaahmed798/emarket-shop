import { Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./component/cards/Product";
import About from "./pages/About/About";
import ProductDetails from "./component/cards/ProductDetails";
import Cart from "./component/cart/Cart";
import Signup from "./component/buttons/Signup";
import LoginPage from "./component/Login/LoginPage";
import Checkout from "./component/buttons/Checkout";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
