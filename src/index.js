import number from "./cardNumber.js";
import name from "./cardName.js";
import { cardYear, cardMonth } from "./cardDate.js";
import cardCvc from "./cardCvc.js";
export const allowedNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

export const allowedKeys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
];

// =======================NAME=======================

export const nameInput = document.getElementById("name");
nameInput.addEventListener("keydown", name);

// ==================NUMBER===================

export const numberInput = document.getElementById("number");
numberInput.addEventListener("keydown", number);

// =========================MONTH====================

export const month = document.getElementById("MM");
month.addEventListener("keydown", cardMonth);

// ====================YEAR===================

export const year = document.getElementById("YY");
year.addEventListener("keydown", cardYear);

// ===========================CVC========================

export const cvcInput = document.getElementById("security-code");
cvcInput.addEventListener("keydown", cardCvc);

//=============================CONFIRM=======================

const confirmBtn = document.getElementById("confirm");
import { validateName } from "./cardName.js";
import { validateNumber } from "./cardNumber.js";
import { validateCvc } from "./cardCvc.js";
import { validateDate, dateCheck } from "./cardDate.js";

confirmBtn.addEventListener("click", function (ev) {
  const check = [];
  check.push(validateName());
  check.push(validateNumber());
  check.push(validateDate());
  check.push(validateCvc());
  check.push(dateCheck());
  const form = document.getElementById("form-section");
  const thanks = document.getElementById("thaks-section");

  if (!check.includes(false)) {
    form.classList.remove("form-section-on");
    form.classList.add("form-section-off");
    thanks.classList.remove("thanks-section-off");
    thanks.classList.add("thanks-section-on");
  }
});
