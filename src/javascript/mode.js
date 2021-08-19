const list = [1,2,2,3,3,3,4,4,4];

const isUndefined = element => typeof(element) === "undefined";

const countNumbersOf = numberList => {
  let objectList = {};

  numberList.map( number => {
    if(!isUndefined(objectList[number])) { 
      objectList[number] += 1 }
    else { 
      objectList[number] = 1; 
    }
  });

  return objectList;
}

const sortFromSmallestToLargest = object => {
  const objectLikeArray = Object.entries(object);
  const orderedList = objectLikeArray.sort((a,b) => a[1] - b[1]);
  
  return orderedList;
} 

const getTheModeOf = numberList => {
  const countedNumbers = countNumbersOf(numberList);
  const orderedCountedNumbers = sortFromSmallestToLargest(countedNumbers);
  const HIGHEST_REPETITION = orderedCountedNumbers[orderedCountedNumbers.length - 1][1];
  const mode = orderedCountedNumbers.filter(e => e[1] === HIGHEST_REPETITION);

  return mode;
}

console.log(getTheModeOf(list));

// Output: { 0: ["3", 3], 1: ["4", 3] }
