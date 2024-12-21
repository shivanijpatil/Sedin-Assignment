import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ContactPage from "./pages/contactpage";
import CartPage from "./pages/cartpage";
import HomePage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./components/ShopPage";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
