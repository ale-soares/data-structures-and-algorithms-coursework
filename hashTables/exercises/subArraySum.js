// HT: Subarray Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function named subarraySum.
// This function should take in an array of integers (nums) and another integer (target).
// Your goal is to find a contiguous subarray whose elements sum up to the given target integer. The function should return an array containing the starting and ending indices of the subarray. If no such subarray exists, return an empty array.

// Examples:
// subarraySum([1, 4, 20, 3, 10, 5], 33) should return [2, 4] because the subarray from index 2 to index 4 sums to 33.
// subarraySum([1, 2, 3], 3) should return [0, 1] because the subarray from index 0 to index 1 sums to 3.

// Using Map
function subarraySum(nums, target) {
  const sumIndex = new Map();

  sumIndex.set(0, -1);
  
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
  
    if (sumIndex.has(currentSum - target)) {
      return [sumIndex.get(currentSum - target) + 1, i];
  
    }
    sumIndex.set(currentSum, i);
  }

  return [];
}

// Using Object
function subarraySum(nums, target) {
  // Create an object named 'sumIndex' to keep track of sums and their
  // corresponding index in the 'nums' array. Initialize it with a
  // sum of 0 and index -1.
  const sumIndex = {};
  sumIndex[0] = -1;

  // Declare a variable 'currentSum' to keep track of
  // the running sum of the elements.
  let currentSum = 0;

  // Loop through each element in the 'nums' array.
  for (let i = 0; i < nums.length; i++) {
    // Update 'currentSum' by adding the current element
    // from 'nums' array.
    currentSum += nums[i];

    // Check if the difference between 'currentSum' and
    // 'target' exists as a key in 'sumIndex'.
    if (sumIndex.hasOwnProperty(currentSum - target)) {
      // If it exists, return an array containing the index
      // next to the saved index for (currentSum - target)
      // and the current index 'i'.
      return [sumIndex[currentSum - target] + 1, i];
    }

    // Save the 'currentSum' and its index 'i' in 'sumIndex'.
    sumIndex[currentSum] = i;
  }

  // If no subarray with sum equal to 'target' is found,
  // return an empty array.
  return [];
}
