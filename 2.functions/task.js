function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summElements = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) ;

  return summElements;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
