const list = [10, 20, 30 , 40, 50];

const getArithmeticMeanOf = list => {
  let summedValues = list.reduce((accumulator , currentElement) => accumulator + currentElement);
  length = list.length;
  average = summedValues / length;
  return average;
}

console.log(getArithmeticMeanOf(list));