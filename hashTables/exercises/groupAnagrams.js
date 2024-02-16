// HT: Group Anagrams ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named groupAnagrams.
// The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.
// Your function should return an array of arrays, where each inner array contains a group of anagram strings.

// Examples:
// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// Using a Map
function groupAnagrams(strings) {
  const anagramGroups = new Map();

  for (const string of strings) {
    const chars = Array.from(string);

    chars.sort();

    const canonical = chars.join("");

    if (anagramGroups.has(canonical)) {
      anagramGroups.get(canonical).push(string);
    } else {
      const group = [string];

      anagramGroups.set(canonical, group);
    }
  }

  return Array.from(anagramGroups.values());
}

// Using an Object
function groupAnagrams(strings) {
  const anagramGroups = {};

  for (const string of strings) {
    const chars = Array.from(string);

    chars.sort();
    
    const canonical = chars.join("");

    if (anagramGroups.hasOwnProperty(canonical)) {
      anagramGroups[canonical].push(string);
    } else {
      anagramGroups[canonical] = [string];
    }
  }

  return Object.values(anagramGroups);
}
