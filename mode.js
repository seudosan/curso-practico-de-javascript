const list = [1,0,3,4,10,1,2,4,10,10,1,2,4,5,7,1,1,23,,5,1,23,0,3,4,2,3];

const getHigherReps = list => {
  let objectList = {};
  list.map(element => {
    objectList[element] ? objectList[element] += 1 : objectList[element] = 1; 
  });
  let arrayList = Object.entries(objectList).sort((a,b) => a[1] - b[1]);
//
  const highestNumber = arrayList[arrayList.length - 1][1];
  let mode = arrayList.filter(e => e[1] === highestNumber);
  return mode.forEach(e => {
    console.log(`Number: ${e[0]} with ${e[1]} reps.`);
  })
}

getHigherReps(list);
