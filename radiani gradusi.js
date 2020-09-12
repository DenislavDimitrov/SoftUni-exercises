function solve(input) {

let radians = Number (input.shift());
let gradus = radians * 180 / Math.PI;

console.log(gradus.toFixed(0))



}
solve([
    "6.2832"
]);