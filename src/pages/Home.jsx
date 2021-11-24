import { useState } from "react";
import Navbar from "../components/navbar/Navbar"
import Products from "./productsPage/Products"
import BrandFilterMd from "../components/brandFilterMd/BrandFilterMd"
import OrderFilterMd from "../components/orderFilterMd/OderFilterMd"
import Login from "../components/login/Login"

const Home = () => {
  const [brandFilter, setBrandFilter] = useState(false);
  const [orderFilter, setOrderFilter] = useState(false);
  const [modal, setModal] = useState(false);

  const handleBrandFilter = () => setBrandFilter(!brandFilter);
  const closeBrandFilter = () => setBrandFilter(false);

  const handleOrderFilter = () => setOrderFilter(!orderFilter);
  const closeOrderFilter = () => setOrderFilter(false);

  const handleModal = () => setModal(!modal);
  const closeModal = () => setModal(false);
  return (
    <>
      <Navbar handleModal={handleModal} />
      <Products
        handleBrandFilter={handleBrandFilter}
        handleOrderFilter={handleOrderFilter}
      />
      <BrandFilterMd click={brandFilter} closeBrandFilter={closeBrandFilter} />
      <OrderFilterMd click={orderFilter} closeOrderFilter={closeOrderFilter} />
      <Login modal={modal} closeModal={closeModal} />
    </>
  );
};

export default Home;
