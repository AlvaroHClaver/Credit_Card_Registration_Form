let cont = 0;
import { allowedNumbers, numberInput } from "./index.js";

const number = (ev) => {
  ev.preventDefault();
  if (allowedNumbers.includes(ev.key) && cont < 16) {
    numberInput.value += ev.key;
    cont++;
  }
  if (ev.key === "Backspace" && cont > 0) {
    numberInput.value = numberInput.value.slice(0, -1);
    cont--;
  }
  const format = numberInput.value.match(/.{1,4}/g);
  const cardNumber = (document.getElementById("card-number").innerText =
    (format.join(" ") || "") === ""
      ? "0000 0000 0000 0000"
      : format.join(" ") || "");
  const cardNumberDesktop = (document.getElementById(
    "card-number-desktop"
  ).innerText =
    (format.join(" ") || "") === ""
      ? "0000 0000 0000 0000"
      : format.join(" ") || "");
  validateNumber();
};

export const validateNumber = () => {
  const numberContainer = document.getElementById("number-container");
  if (numberInput.value === "") {
    numberInput.classList.add("field-error");
    numberContainer.classList.add("blank-error");
    numberContainer.classList.remove("number-error");
    return false;
  } else if (numberInput.value !== "" && cont !== 16) {
    numberContainer.classList.remove("blank-error");
    numberContainer.classList.add("number-error");
    return false;
  } else {
    numberContainer.classList.remove("blank-error");
    numberContainer.classList.remove("number-error");
    numberInput.classList.remove("field-error");
    return true;
  }
};

export default number;
