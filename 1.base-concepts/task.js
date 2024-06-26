"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    return arr;
  }

  if (D == 0) {
    arr.push(-b / (2 * a));
  }

  if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = +(percent / 100 / 12);
  let loanBody = +(amount - contribution);

  let monthPayment = +(loanBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1))));

  return +(monthPayment * countMonths).toFixed(2);
}
