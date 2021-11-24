import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import "./index.scss";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
