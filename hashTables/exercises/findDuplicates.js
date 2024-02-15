// HT: Find Duplicates ( ** Interview Question)
// In this exercise, you are required to write a JavaScript function called findDuplicates. This function will take an array of numbers as its only parameter. Your goal is to identify and return all the numbers that appear more than once in the array.
// The function should return a new array containing the duplicate numbers. The function should return an empty array if there are no duplicate numbers.

// Examples:
// findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]) should return [4, 6] because the numbers 4 and 6 appear more than once.
// findDuplicates([1, 2, 3]) should return [] because there are no duplicate numbers.

// My Solution:
function findDuplicates(arr) {
  let unique = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique[arr[i]]) {
      unique[arr[i]] = true;
    } else {
      unique[arr[i]] = false;

      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

// Proposed Solution:
function findDuplicates(nums) {
  const numCounts = {};

  for (let num of nums) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  const duplicates = [];

  for (let key in numCounts) {
    if (numCounts[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}
