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

  const handleChange = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  useEffect(() => {
    const valor = parseFloat(form.value);
    console.log(
      `Conta de R$${valor}. Divido por ${form.people} vai ficar R$${
        valor / form.people
      } para cada um`
    );
  }, [form.people, form.value]);

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
        <BtnGroup />
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
      <div className="card__calc-result"></div>
    </div>
  );
}
