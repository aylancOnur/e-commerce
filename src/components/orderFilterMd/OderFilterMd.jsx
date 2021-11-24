import "./orderFilterMd.scss";
import { FaTimes } from "react-icons/fa";

const OderFilterMd = ({ click, closeOrderFilter }) => {
  return (
    <nav className="order-filtermd">
      <ul
        className={click ? "order-filtermd-menu active" : "order-filtermd-menu"}
      >
        <li className="order-filtermd-icon" onClick={closeOrderFilter}>
          <FaTimes />
        </li>
        <li className="order-filtermd-menu-item">
          <p>Low to high</p>
        </li>
        <li className="order-filtermd-menu-item">
          <p>High to low</p>
        </li>
        
      </ul>
    </nav>
  );
};

export default OderFilterMd;
