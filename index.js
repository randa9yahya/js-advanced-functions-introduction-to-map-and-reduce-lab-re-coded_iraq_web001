// Your code here

function mapToNegativize(arry){
  return arry.map(x => x * -1);
}
console.log(mapToNegativize[1, 2, 3, -9]);

 function mapToNoChange(sourceArray) {
   return sourceArray;
  // return sourceArray.map( arry => arry === sourceArray);
 }
let array =["paul", "gurney", "vladimir", "jessica", "chani"];
let noChange = array.map(mapToNoChange) ;
// console.log(mapToNoChange["paul", "gurney", "vladimir", "jessica", "chani"]);

function mapToDouble(num){
  return num.map(x => x * 2);
}
console.log(mapToNegativize[1, 2, 3, -9]);

function mapToSquare(num){
  return num.map(function (x) {
    return Math.pow(x,2);
  });
}
console.log(mapToSquare[1, 2, 3, -9]);


function reduceToTotal(sourceArray, startingPoint) {
 reducer = (accumulator, currentValue) => accumulator + currentValue;
  return reducer.reduce(sourceArray,startingPoint);
}
console.log(reduceToTotal([1,2,3],100));

 function reduceToAllTrue(sourceArray){
   return sourceArray;
 }
[1, 2, true, "razmatazz"].every(reduceToAllTrue);


 function reduceToAnyTrue(sourceArray){
   return sourceArray;
}
[ false, null, null, null].some(reduceToAnyTrue);
