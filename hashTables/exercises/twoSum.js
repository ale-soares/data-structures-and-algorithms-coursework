// HT: Two Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function called twoSum.
// The function should accept an array of integers (nums) and an integer (target). Your task is to find two numbers in the array that sum up to the target integer. The function should return an array containing the indices of these two numbers. If no such numbers exist, return an empty array.

// Examples:
// twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
// twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.

function twoSum(nums, target) {
  // Create an empty object called 'numObject'.
  // This object will store numbers from the array as keys
  // and their indexes as values.
  const numObject = {};

  // Loop through the 'nums' array.
  for (let i = 0; i < nums.length; i++) {
    // Get the current number from the array.
    const num = nums[i];

    // Calculate the number that would add up with 'num' to
    // give us the 'target'.
    const complement = target - num;

    // Check if this 'complement' number is stored in 'numObject'.
    if (numObject.hasOwnProperty(complement)) {
      // If yes, return an array containing the index of
      // the 'complement' and the index of 'num'.
      return [numObject[complement], i];
    }

    // If the 'complement' is not found, store the 'num' and
    // its index in 'numObject'.
    numObject[num] = i;
  }

  // If no such pair is found that adds up to 'target',
  // return an empty array.
  return [];
}
