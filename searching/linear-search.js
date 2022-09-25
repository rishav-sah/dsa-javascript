// constants

const numbersList = [5, 54, 65, 343, 65, 235, 654, 10];
const targetValue = 10;

searchNumber1(numbersList, targetValue);
searchNumber2(numbersList, targetValue);

// time complexity for linear search algorithm
const timeComplexity = [
  {
    name: "Best Case",
    BigOnotation: "O(1)",
    case: "element will be found at index[0]"
  },
  {
    name: "Worst Case",
    BigOnotation: "O(n)",
    case: "index[n] will iterate"
  }
];

// search in the array : return the index if item found
// otherwise return  if item not found
function searchNumber1(array, target) {
  if (array.length == 0) {
    return;
  }
  // using for loop
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element == target) {
      console.log(`target lies in index: ${index}`);
      return index;
    }
  }
  console.log("target not found");
  return;
}

// search in the array : return the element if item found
// otherwise return if item not found
function searchNumber2(array, target) {
  if (array.length == 0) {
    return;
  }
  // using for loop
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element == target) {
      console.log(`value of element: ${element}`);
      return element;
    }
  }
  console.log("element not found");
  return;
}

// Superpower - ES6 handy built-in array methods to perform search

const includes = numbersList.includes(targetValue);
const indexOf = numbersList.indexOf(targetValue) !== -1
  ? numbersList.indexOf(targetValue)
  : null;

console.log(includes);
console.log(indexOf || "item not found");

// Note: Apart from the above two methods we can use other methods as well such as forEach(), find(), map(), filter(), reduce(). It highly depends on use cases.


