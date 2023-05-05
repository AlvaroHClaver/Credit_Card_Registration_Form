import { allowedKeys, nameInput } from "./index.js";
const name = (ev) => {
  ev.preventDefault();
  const letter = ev.key.toUpperCase();
  if (allowedKeys.includes(letter)) {
    nameInput.value += letter;
  }
  if (ev.key === "Backspace") {
    nameInput.value = nameInput.value.slice(0, -1);
  }

  const cardName = document.getElementById("card-name");
  cardName.innerText =
    nameInput.value === "" ? "JANE APPLESEED" : nameInput.value;
  const cardNameDesktop = (document.getElementById(
    "card-name-desktop"
  ).innerText = nameInput.value === "" ? "JANE APPLESEED" : nameInput.value);
  validateName();
};

export const validateName = () => {
  const nameContainer = document.getElementById("name-container");
  if (nameInput.value === "") {
    nameContainer.classList.add("blank-error");
    nameInput.classList.add("field-error");
    return false;
  } else {
    nameContainer.classList.remove("blank-error");
    nameInput.classList.remove("field-error");
    return true;
  }
};

export default name;
