function solve(input){
let masa = Number(input.shift());
let tableLength = Number(input.shift());
let tableWidth = Number(input.shift());

let pokrivkaArea = masa * (tableLength + 2 * 0.30) * (tableWidth + 2 * 0.30);
let kareArea = masa * (tableLength/2)* (tableLength/2);

let pokrivkaUSD = 7;
let kareUSD = 9;

let totalUSD = (pokrivkaArea * pokrivkaUSD) + (kareArea * kareUSD);
let totalBGN = totalUSD * 1.85;

console.log (`${totalUSD.toFixed(2)} USD`);
console.log (`${totalBGN.toFixed(2)} BGN`);


}
solve ([
    "10",
    "1.20",
    "0.65",
])