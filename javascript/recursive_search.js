function recursiveSearch(arr, target) {
  if (arr.includes(target)){
    return true
  } else {
    return false
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

// the function takes in the array, iterates over the array
// if the number is in the array, returns true
// once the loop is done and hasn't return true, returns false

// what I found out was that actually .includes is a better solution even though my iterarion was working correctly