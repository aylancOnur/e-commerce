import "./checkBox.scss"

const CheckBox = ({ children }) => {
  return (
    <label className="custom-checkbox">
      {children}
      <input
        type="checkbox"
        className="custom-checkbox__input"
      />
      <span className="custom-checkbox__span"></span>
    </label>
  );
};

export default CheckBox;
