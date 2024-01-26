//================= array challenge based on the LRU caching algorithm
// function ArrayChallenge(strArr) {
//   let cache = [];
//   for (const element of strArr) {
//     let current = element;
//     let index = cache.indexOf(current);

//     if (index !== -1) {
//       cache.splice(index, 1);
//     } else if (cache.length === 5) {
//       cache.shift();
//     }
//     cache.push(current);
//   }
//   return cache.join("-");
// }

function ArrayChallenge(strArr) {
  // Initialize the cache as a Map to maintain insertion order
  let cache = new Map();

  strArr.forEach((access) => {
    if (cache.has(access)) {
      // If the item is already in the cache, delete it and re-insert to update the order
      cache.delete(access);
    } else if (cache.size === 5) {
      // If the cache is full and the item is not in the cache, delete the least recently used item
      // Maps maintain the order of items, so the first key is the least recently used
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    // Add the accessed item to the cache
    cache.set(access, true);
  });

  // Convert the cache keys to an array and join with a hyphen to return the final state
  return Array.from(cache.keys()).join("-");
}

// Test cases
console.log(ArrayChallenge(["A", "B", "A", "C", "A", "B"])); // Expected output: "C-A-B"
console.log(ArrayChallenge(["A", "B", "C", "D", "E", "D", "Q", "Z", "C"])); // Expected output: "E-D-Q-Z-C"

//============================================================================
function MathChallenge(num1, num2) {
  if (num2 > num1) {
    return "true";
  } else if (num1 === num2) {
    return "-1";
  } else {
    return "false";
  }
}

// You can test the function with some examples
console.log(MathChallenge(3, 122)); // Expected output: 'true'
console.log(MathChallenge(67, 67)); // Expected output: '-1'
console.log(MathChallenge(68, 67)); // Expected output: 'false'

//================================================================
function StringChallenge(num) {
  // Calculate the number of hours by dividing by 60 and rounding down
  let hours = Math.floor(num / 60);
  // Calculate the number of minutes that are left over
  let minutes = num % 60;
  // Return the result formatted as "hours:minutes"
  return hours + ":" + minutes;
}

console.log(StringChallenge(63)); // Expected output: "1:3"
console.log(StringChallenge(126)); // Expected output: "2:6"
console.log(StringChallenge(45)); // Expected output: "0:45"
