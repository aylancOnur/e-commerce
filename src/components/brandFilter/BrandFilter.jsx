import CheckBox from "../checkBox/CheckBox";
import "./brandFilter.scss";

const BrandFilter = () => {
  return (
    <div className="brand">
      <div className="brand-header">
        <h3>Brands</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <CheckBox>Nike</CheckBox>
        </li>
        <li className="list-group-item">
          <CheckBox>Adidas</CheckBox>
        </li>
        <li className="list-group-item">
          <CheckBox>Puma</CheckBox>
        </li>
        <li className="list-group-item">
          <CheckBox>Reebok</CheckBox>
        </li>
        <li className="list-group-item">
          <CheckBox>Hummel</CheckBox>
        </li>
      </ul>
    </div>
  );
};

export default BrandFilter;
