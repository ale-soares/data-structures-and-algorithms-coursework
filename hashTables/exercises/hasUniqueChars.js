// Set: Has Unique Chars ( ** Interview Question)
// Your task is to write a function named hasUniqueChars that takes a string as input. Your function should check if all the characters in the string are unique or not. In other words, no character should appear more than once in the string.

// Example
// Input: "hello"
// Output: false
// In this example, the letter 'l' appears two times in the word "hello". So, the function should return false.

function hasUniqueChars(str) {
  let uniqueStr = new Set(str);
  if (uniqueStr.size === str.length) {
    return true;
  }

  return false;
}
