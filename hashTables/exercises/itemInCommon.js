// Hash Tables: Arrays with items in common ( ** Interview Question)
// Objective:
// You have two arrays and you should determine if they have elements in common.

// Ex: [1, 3, 5] and [2, 4, 5] have 5 in common.

// Inefficient way, a loop inside a loop is O(n^2)
function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
}

// Efficient way, two separate loops are O(n)
function itemInCommon(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }

  return false;
}
