// Set: Find Pairs ( ** Interview Question)
// Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).
// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.
// The function should return these pairs as a list.

// Example
// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7
// Output: [[1, 6], [2, 5], [3, 4]]

function findPairs(arr1, arr2, target) {
  let arr1Nums = new Set(arr1);
  let pairs = [];

  for (let num of arr2) {
    let complement = target - num;

    if (arr1Nums.has(complement)) {
      pairs.push([complement, num]);
    }
  }

  return pairs;
}
