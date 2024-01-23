// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// Use Higher Order Functions "Reduce"
// function grow(x) {
//   const result = x.reduce(
//     (accumulator, currentValue) => accumulator * currentValue,
//     1
//   );
//   return result;
// }

// Use function expression fill with arrow functions
const grow = (x) =>
  x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(grow([2, 2, 2, 2, 2, 2]));
