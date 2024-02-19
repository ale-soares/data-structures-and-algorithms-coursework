// Set: Longest Consecutive Sequence ( ** Interview Question)
// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.
// Your function should find and return the length of the longest consecutive sequence of numbers in the list.

// Example 1:
// Input: [1, 2, 3, 4, 5]
// Output: 5
// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

function longestConsecutiveSequence(nums) {
  const numSet = new Set();
  for (const num of nums) {
    numSet.add(num);
  }

  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
