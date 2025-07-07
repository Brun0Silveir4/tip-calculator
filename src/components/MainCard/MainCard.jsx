import "./MainCard.scss";
import { useEffect, useState, useRef } from "react";
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
  const [tipPerPerson, setTipPerPerson] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  const [showTip, setShowTip] = useState(false);

  const handleChange = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const defineTipValue = (value) => {
    setTipValue(value);
  };

  const prevRef = useRef({
    value: form.value,
    people: form.people,
    tip: tipValue,
  });

  const handleReset = () => {
    setForm({ value: "", people: "" });
    setTipValue(undefined);
    setTipPerPerson(0.0);
    setTotalPerPerson(0.0);
    setShowTip(false);

    prevRef.current = {
      value: "",
      people: "",
      tip: undefined,
    };
  };
  

  useEffect(() => {
    const prevValues = prevRef.current;
    if (
      prevValues.value !== form.value ||
      prevValues.people !== form.people ||
      prevValues.tip !== tipValue
    ) {
      setShowTip(true);
    }

    prevRef.current = {
      value: form.value,
      people: form.people,
      tip: tipValue,
    };
  }, [form.value, form.people, tipValue]);

  useEffect(() => {
    const bill = parseFloat(form.value);
    const people = parseInt(form.people);
    const tip = parseFloat(tipValue);

    if (bill > 0 && people > 0 && tip > 0) {
      const tipTotal = bill * (tip / 100);
      const tipEach = tipTotal / people;
      const totalEach = (bill + tipTotal) / people;

      setTipPerPerson(tipEach);
      setTotalPerPerson(totalEach);
    } else {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    }
  }, [form.value, form.people, tipValue]);

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
        <BtnGroup defineTipValue={defineTipValue} tipValue={tipValue} />
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
              <p>R${tipPerPerson.toFixed(2)}</p>
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
              <p>R${totalPerPerson.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="card__calc-result__resetbtn">
          <button
            className={`card__calc-result__resetbtn ${showTip ? "reset" : "blocked"}`}
            onClick={handleReset}
            disabled={!showTip}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
