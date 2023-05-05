//=====================YEAR========================
import { year, allowedNumbers } from "./index.js";
let contYear = 0;

export const cardYear = (ev) => {
  ev.preventDefault();
  if (allowedNumbers.includes(ev.key) && contYear < 2) {
    year.value += ev.key;
    contYear++;
  }
  if (ev.key === "Backspace" && contYear > 0) {
    year.value = year.value.slice(0, -1);
    contYear--;
  }
  const cardYear = (document.getElementById("year").innerText =
    year.value === "" ? "00" : year.value);
  const cardYearDesktop = (document.getElementById("year-desktop").innerText =
    year.value === "" ? "00" : year.value);
  validateDate();
};

// ================MONTH===================

import { month } from "./index.js";
let contMonth = 0;

export const cardMonth = (ev) => {
  ev.preventDefault();
  if (allowedNumbers.includes(ev.key) && contMonth < 2) {
    month.value += ev.key;
    contMonth++;
  }
  if (ev.key === "Backspace" && contMonth > 0) {
    month.value = month.value.slice(0, -1);
    contMonth--;
  }
  const mm = (document.getElementById("mm").innerText =
    month.value === "" ? "00" : month.value);
  const mmDesktop = (document.getElementById("mm-desktop").innerText =
    month.value === "" ? "00" : month.value);
  validateDate();
};

export const validateDate = () => {
  const dateContainer = document.querySelector(".exp-date-container");
  if (month.value === "") {
    dateContainer.classList.add("blank-error");
    month.classList.add("field-error");
    return false;
  } else {
    month.classList.remove("field-error");
  }
  if (year.value === "") {
    dateContainer.classList.add("blank-error");
    year.classList.add("field-error");
    return false;
  } else {
    year.classList.remove("field-error");
  }
  if (year.value !== "" && month.value !== "") {
    dateContainer.classList.remove("blank-error");
    return true;
  }
};

export const dateCheck = () => {
  const dateContainer = document.querySelector(".exp-date-container");
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear() - 2000;

  if (month.value < 1 || month.value > 12) {
    dateContainer.classList.add("invalid-date");
    month.classList.add("field-error");
    return false;
  }
  if (currentYear < year.value) {
    dateContainer.classList.remove("invalid-date");
    year.classList.remove("field-error");
    month.classList.remove("field-error");
    return true;
  }
  if (currentYear === year.value) {
    if (currentMonth >= month.value) {
      dateContainer.classList.remove("invalid-date");
      month.classList.remove("field-error");
      return true;
    } else {
      dateContainer.classList.add("invalid-date");
      month.classList.add("field-error");
      return false;
    }
  }
  if (currentYear > year.value) {
    dateContainer.classList.add("invalid-date");
    year.classList.add("field-error");
    return false;
  }
};
