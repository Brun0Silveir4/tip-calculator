import "./MainCard.scss";
import { useEffect, useState } from "react";
import Input from "../input/Input";
import iconMoney from "../../assets/icon-dollar.svg";
import iconPerson from "../../assets/icon-person.svg";
import BtnGroup from "../Btn-group/BtnGroup";

export default function MainCard() {
  const [form, setForm] = useState({
    value: "",
    people: "",
  });

  const [tipValue, setTipValue] = useState();
  const [tipAmount, setTipAmount] = useState(0.00)
  const [totalPerson, setTotalPerson] = useState(0.00)

  const handleChange = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const defineTipValue = (value) => {
    setTipValue(value);
  };

  useEffect(() => {
    console.log(`O valor da gorjeta escolhido foi de: ${tipValue}`);
  }, [tipValue]);

  return (
    <div className="card__container">
      <div className="card__select">
        <div className="card__select__bill__input">
          <Input
            value={form.value}
            onChange={(val) => handleChange("value", val)}
            title={"Bill"}
            specification={"Bill"}
            icon={iconMoney}
          />
        </div>
        <div className="card__select__tip-percentage">
          <BtnGroup defineTipValue={defineTipValue} />
        </div>
        <div className="card__select__bill__input">
          <Input
            value={form.people}
            onChange={(val) => handleChange("people", val)}
            title={"People"}
            specification={"People"}
            icon={iconPerson}
          />
        </div>
      </div>
      <div className="card__calc-result">
        <div className="card__calc-result__divisions">

          <div className="card__calc-result__divisions__division-item">
            <div className="card__calc-result__divisions__division-item__texts">
              <div className="card__calc-result__divisions__division-item__texts__title">
                <p>Tip Amount</p>
              </div>
              <div className="card__calc-result__divisions__division-item__texts__subtitle">
                <p>/ person</p>
              </div>
            </div>
            <div className="card__calc-result__divisions__division-item__total">
              <p>${tipAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="card__calc-result__divisions__division-item">
            <div className="card__calc-result__divisions__division-item__texts">
              <div className="card__calc-result__divisions__division-item__texts__title">
                <p>Total</p>
              </div>
              <div className="card__calc-result__divisions__division-item__texts__subtitle">
                <p>/ person</p>
              </div>
            </div>
            <div className="card__calc-result__divisions__division-item__total">
              <p>${totalPerson.toFixed(2)}</p>
            </div>
          </div>


        </div>
        <div className="card__calc-result__resetbtn">
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
}
