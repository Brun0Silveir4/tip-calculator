import { useRef } from "react";
import "./Input.scss";

export default function Input({ title, value, onChange, specification, icon }) {
  const inputRef = useRef(null);
  const noNegativeOrE = (e) => {
    if (e.key === "-" || e.key.toLowerCase() === "e") {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;
    val = val.replace(/[^0-9.]/g, "");
    onChange(val);
  };

  const handleBlur = () => {
    if (value) {
      if (specification === "Bill") {
        const num = parseFloat(value);
        if (!isNaN(num)) {
          onChange(num.toFixed(2).replace(",", "."));
        }
      } else {
        onChange(value);
      }
    }
  };

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.select();
    }, 0);
  };

  return (
    <div className="input__container">
      <div className="input__title">
        <p>{title}</p>
        {specification === "People" && value === "0" ? (
          <p className="input__title--zero">Can't be zero</p>
        ) : (
          ""
        )}
      </div>
      <div className="input__group">
        <img src={icon} alt="" />
        <input
          className={specification === "People" && value === "0" ? "zero" : ""}
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={noNegativeOrE}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseUp={(e) => e.preventDefault()}
          placeholder="0"
          inputMode="decimal"
        />
      </div>
    </div>
  );
}
