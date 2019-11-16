//generate random index from array:
const checkIndex = arr => {
  return Math.floor(Math.random() * arr.length);
};

//Fight Button
//onClick function to increment fighterHealth on each click of the fight button.
//arrays we will enter will be celebstats1 and celebstats2
// const checkStats = (arr1, arr2) => {
//   let index = checkIndex(arr1);
//   let fighter1Count = health1; //Fighter1Health is the state of the
//   let fighter2Count = health2;
//   let fighter1 = arr1[index];
//   let fighter2 = arr2[index];
//   if (fighter1 > fighter2) {
//     fighter2Count += 1;
//     console.log(health2++);
//     return health2++;
//   } else if (fighter1 < fighter2) {
//     fighter1Count += 1;
//     console.log(health1++);
//     return health1++;
//   } else console.log("players are evenly matched");
// };

export default checkIndex;
