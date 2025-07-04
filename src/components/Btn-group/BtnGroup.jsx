import "./BtnGroup.scss"
import { useState, useRef } from "react"

export default function BtnGroup({ defineTipValue }) {
  const inputRef = useRef(null);

  const [input, setInput] = useState(false);
  const [customInput, setCustomInput] = useState("");

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
    if(customInput){
        defineTipValue(customInput)
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
    setCustomInput(""); // limpa o campo custom ao escolher botão fixo
  };

  const handleCustom = () => {
    setInput(true);
  };

  return (
    <>
      <div className="tip-percentage__title">
        <p>Select Tip %</p>
      </div>
      <div className="tip-percentage__btn-group">
        <div className="tip-percentage__btn tip-percentage__btn--fill" onClick={() => handleClick(5)}>5%</div>
        <div className="tip-percentage__btn tip-percentage__btn--fill" onClick={() => handleClick(10)}>10%</div>
        <div className="tip-percentage__btn tip-percentage__btn--fill" onClick={() => handleClick(15)}>15%</div>
        <div className="tip-percentage__btn tip-percentage__btn--fill" onClick={() => handleClick(25)}>25%</div>
        <div className="tip-percentage__btn tip-percentage__btn--fill" onClick={() => handleClick(50)}>50%</div>

        {input === false ? (
          <div className="tip-percentage__btn tip-percentage__btn--custom" onClick={handleCustom}>Custom</div>
        ) : (
          <input
            type="number"
            ref={inputRef}
            value={customInput}
            className="tip-percentage__btn tip-percentage__btn--custom--input"
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
