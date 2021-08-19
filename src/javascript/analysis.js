// Utils
const isPar = number => (number % 2 === 0);
const getArithmeticMeanOf = list => {
  let summedValues = list.reduce((accumulator , currentElement) => accumulator + currentElement);
  length = list.length;
  mean = summedValues / length;
  return mean;
}

// Median Calculator
const getMedian = list => {
  const half = parseInt(list.length / 2);
  let median;
  if(isPar(list.length)) {
    first_e = list[half - 1];
    second_e = list[half];
    median = getArithmeticMeanOf([first_e, second_e]);
    return median;
  } else {
    median = list[half];
    return median;
  }
}

// General Median
const argSalaries = argList.map(person => {
  return person.salary;
});

const argSalariesSorted = argSalaries.sort((a,b) => a - b);

const generalMedian = getMedian(argSalariesSorted);

// Top 10% Median
const spliceStart = parseInt((argSalariesSorted.length * 90) / 100);
const spliceCount = argSalariesSorted.length - spliceStart;

const top10Salaries = argSalariesSorted.splice(spliceStart, argSalariesSorted.length);

console.log({
  generalMedian,
  top10Salaries
})



