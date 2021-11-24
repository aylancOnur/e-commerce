import "./brandFilterMd.scss";
import CheckBox from "../checkBox/CheckBox";
import { FaTimes } from "react-icons/fa";

const BrandFilterMd = ({ click, closeBrandFilter }) => {
  return (
    <nav className="brand-filtermd">
      <ul
        className={click ? "brand-filtermd-menu active" : "brand-filtermd-menu"}
      >
        <li className="brand-filtermd-icon" onClick={closeBrandFilter}>
          <FaTimes />
        </li>
        <li className="brand-filtermd-menu-item">
          <span>Nike</span>
          <CheckBox />
        </li>
        <li className="brand-filtermd-menu-item">
          <span>Adidas</span>
          <CheckBox />
        </li>
        <li className="brand-filtermd-menu-item">
          <span>Puma</span>
          <CheckBox />
        </li>
      </ul>
    </nav>
  );
};

export default BrandFilterMd;
