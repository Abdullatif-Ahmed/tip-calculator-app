let bill = document.querySelector("#bill");
let percentBtns = Array.from(document.querySelectorAll(".percent-btn"));
let customPercent = document.querySelector("#custom-percent");
let peopleNum = document.querySelector("#people-num");
let tipVal = document.querySelector("#tip-val");
let totalVal = document.querySelector("#total-val");
let resetBtn = document.querySelector(".reset-btn");
let billHeading = document.querySelector(".bill-heading");
let percentHeading = document.querySelector(".percent-heading");
let peopleNumHeading = document.querySelector(".peopleNum-heading");
let percentVal = "";

percentBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    percentVal = e.target.dataset.val;
    activeState(e.target);
  });
});
customPercent.addEventListener("input", (e) => {
  percentVal = e.target.value;
});
customPercent.addEventListener("focus", (e) => {
  percentVal = e.target.value;
  activeState(e.target);
});
resetBtn.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  document.querySelectorAll(".error-massege").forEach((el) => {
    el.remove();
  });
  if (bill.value === "") {
    console.log("bill can't be empty");
  } else if (bill.value === "0") {
    console.log("bill can't be zero");
  } else if (percentVal === "") {
    console.log("percent can't be empty");
  } else if (percentVal === "0") {
    console.log("percent can't be zero");
  } else if (peopleNum.value === "") {
    console.log("people can't be empty");
  } else if (peopleNum.value === "0") {
    console.log("people can't be zero");
  } else {
    let total = (parseFloat(percentVal) / 100) * parseFloat(bill.value);
    let tip = total / parseFloat(peopleNum.value);
    tipVal.textContent = tip.toFixed(2);
    totalVal.textContent = total.toFixed(2);
    console.log(tip);
    e.target.classList.add("active");
  }
  errorMassege(bill.value, billHeading);
  errorMassege(percentVal, percentHeading);
  errorMassege(peopleNum.value, peopleNumHeading);
});
function errorMassege(val, el) {
  if (val === "") {
    let span = document.createElement("span");
    span.innerHTML = "Can't be embty";
    span.classList.add("error-massege");
    el.append(span);
  } else if (val === "0") {
    let span = document.createElement("span");
    span.innerHTML = "Can't be zero";
    span.classList.add("error-massege");
    el.append(span);
  }
}
function activeState(el) {
  percentBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  customPercent.classList.remove("active");
  el.classList.add("active");
}
