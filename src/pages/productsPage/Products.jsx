import { useEffect, useState } from "react";
import BrandFilter from "../../components/brandFilter/BrandFilter";
import OrderFilter from "../../components/orderFilter/OrderFilter";
import ProductCard from "../../components/productCard/ProductCard";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import "./products.scss";

const Products = ({ handleBrandFilter, handleOrderFilter }) => {
  const [md, setMd] = useState(true);

  const responsiveRow = () => {
    if (window.innerWidth <= 1024) {
      setMd(false);
    } else {
      setMd(true);
    }
  };

  useEffect(() => {
    responsiveRow();
    window.addEventListener("resize", responsiveRow);
  }, []);

  let filterContainer = () => {
    return (
      <>
        <BrandFilter />
        <OrderFilter />
      </>
    );
  };

  let filterMd = () => {
    return (
      <div className="filtermd">
        <div className="filtermd-order" onClick={handleOrderFilter}>
          <RiArrowUpDownLine />
          <span>Sırala</span>
        </div>
        <div className="filtermd-filter" onClick={handleBrandFilter}>
          <FaFilter />
          <span>Filtrele</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="products">
        <div className="products-filter">
          {md ? filterContainer() : filterMd()}
        </div>
        <div className="products-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
