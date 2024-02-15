// HT: First Non-Repeating Character ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

// The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. If every character in the string repeats, or if the string is empty, the function should return null.

// My Solution:
function firstNonRepeatingChar(str) {
  let charCounts = {};

  for (var char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (var char of str) {
    if (charCounts[char] === 1) {
      return char;
    }
  }

  return null;
}

// Proposed Solution:
function firstNonRepeatingChar(string) {
  const charCounts = {};

  for (let i = 0; i < string.length; i++) {
    const c = string.charAt(i);

    charCounts[c] = (charCounts[c] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    const c = string.charAt(i);

    if (charCounts[c] === 1) {
      return c;
    }
  }

  return null;
}
