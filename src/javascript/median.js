const list = [1, 2, 3, 4, 5, 6, 8, 9]
const isPar = list => (list.length % 2 === 0);
const getArithmeticMeanOf = list => {
  let summedValues = list.reduce((accumulator , currentElement) => accumulator + currentElement);
  length = list.length;
  mean = summedValues / length;
  return mean;
}
const getMedian = list => {
  const orderList = list.sort((a,b) => a - b);
  const half = parseInt(orderList.length / 2);
  let median;
  if(isPar(orderList)) {
    first_e = orderList[half - 1];
    second_e = orderList[half];
    median = getArithmeticMeanOf([first_e, second_e]);
    return median;
  } else {
    median = orderList[half];
    return median;
  }
}

console.log(getMedian(list));