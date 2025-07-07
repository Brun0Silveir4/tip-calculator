import "./BtnGroup.scss";
import { useState, useRef } from "react";

export default function BtnGroup({ defineTipValue }) {
  const inputRef = useRef(null);

  const [input, setInput] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [selected, setSelected] = useState(null);

  const noNegativeOrE = (e) => {
    if (e.key === "-" || e.key.toLowerCase() === "e") {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;
    val = val.replace(/[^1-9.]/g, "");
    setCustomInput(val);
  };

  const handleBlur = () => {
    if (customInput) {
      defineTipValue(customInput);
      setSelected("custom");
    }
  };

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.select();
    }, 0);
  };

  const handleClick = (value) => {
    defineTipValue(value);
    setSelected(value);
    setInput(false);
    setCustomInput("");
  };

  const handleCustom = () => {
    setInput(true);
    setSelected("custom");
  };

  return (
    <>
      <div className="tip-percentage__title">
        <p>Select Tip %</p>
      </div>
      <div className="tip-percentage__btn-group">
        {[5, 10, 15, 25, 50].map((val) => (
          <div key={val} 
          className={`tip-percentage__btn tip-percentage__btn--fill ${selected === val ? "selected" : ""}`} 
          onClick={() => handleClick(val)}>
            {val}%
          </div>
        ))}

        {!input ? (
          <div
          className={`tip-percentage__btn tip-percentage__btn--custom ${selected === "custom" ? "selected" : ""}`}
          onClick={handleCustom}>
            Custom
          </div>
        ) : (
          <input
            type="number"
            ref={inputRef}
            value={customInput}
            className={`tip-percentage__btn tip-percentage__btn--custom--input ${selected === "custom" ? "selected" : ""}`}
            onChange={handleChange}
            onKeyDown={noNegativeOrE}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onMouseUp={(e) => e.preventDefault()}
            inputMode="decimal"
            min={1}
          />
        )}
      </div>
    </>
  );
}
