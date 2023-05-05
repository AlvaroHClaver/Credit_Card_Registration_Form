import { cvcInput, allowedNumbers } from "./index.js";
let contCvc = 0;

const cardCvc = (ev) => {
  ev.preventDefault();

  if (allowedNumbers.includes(ev.key) && contCvc < 3) {
    cvcInput.value += ev.key;
    contCvc++;
  }
  if (ev.key === "Backspace" && contCvc > 0) {
    cvcInput.value = cvcInput.value.slice(0, -1);
    contCvc--;
  }
  const cvc = (document.getElementById("cvc").innerText =
    cvcInput.value === "" ? "000" : cvcInput.value);
  const cvcDesktop = (document.getElementById("cvc-desktop").innerText =
    cvcInput.value === "" ? "000" : cvcInput.value);
  validateCvc();
};

export const validateCvc = () => {
  const cvcContainer = document.querySelector(".cvc-form");
  if (cvcInput.value === "") {
    cvcInput.classList.add("field-error");
    cvcContainer.classList.remove("number-error");
    cvcContainer.classList.add("blank-error");
    return false;
  } else if (cvcInput.value !== "" && contCvc < 3) {
    cvcContainer.classList.remove("blank-error");
    cvcContainer.classList.add("number-error");
    return false;
  } else {
    cvcInput.classList.remove("field-error");
    cvcContainer.classList.remove("blank-error");
    cvcContainer.classList.remove("number-error");
    return true;
  }
};

export default cardCvc;
