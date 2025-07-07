import "./BtnGroup.scss";
import { useRef, useState } from "react";

export default function BtnGroup({ defineTipValue, tipValue }) {
  const inputRef = useRef(null);

  const [input, setInput] = useState(false);
  const [customInput, setCustomInput] = useState("");

  const noNegativeOrE = (e) => {
    if (e.key === "-" || e.key.toLowerCase() === "e") {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    let val = e.target.value.replace(/[^0-9.]/g, "");
    if (val === "0") val = "";
    setCustomInput(val);
  };

  const handleBlur = () => {
    if (customInput) {
      defineTipValue(customInput);
    }
  };

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.select();
    }, 0);
  };

  const handleClick = (value) => {
    defineTipValue(value);
    setInput(false);
    setCustomInput("");
  };

  const handleCustom = () => {
    setInput(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const parsedTip = parseFloat(tipValue);
  const isCustomSelected =
    tipValue && ![5, 10, 15, 25, 50].includes(parsedTip);

  return (
    <>
      <div className="tip-percentage__title">
        <p>Select Tip %</p>
      </div>
      <div className="tip-percentage__btn-group">
        {[5, 10, 15, 25, 50].map((val) => (
          <div
            key={val}
            className={`tip-percentage__btn tip-percentage__btn--fill ${
              parsedTip === val ? "selected" : ""
            }`}
            onClick={() => handleClick(val)}
          >
            {val}%
          </div>
        ))}

        {!input ? (
          <div
            className={`tip-percentage__btn tip-percentage__btn--custom ${
              isCustomSelected ? "selected" : ""
            }`}
            onClick={handleCustom}
          >
            Custom
          </div>
        ) : (
          <input
            type="number"
            ref={inputRef}
            value={customInput}
            className={`tip-percentage__btn tip-percentage__btn--custom--input ${
              isCustomSelected ? "selected" : ""
            }`}
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
