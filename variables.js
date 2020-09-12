function aquarium (input){
let lenght = Number (input.shift());
let width = Number (input.shift());
let height = Number (input.shift());
let percentage = Number (input.shift());

let volume = lenght * width * height;
let liters = volume * 0.001;
let result = liters - liters * percentage / 100;

console.log (result.toFixed (2))


}

aquarium (['85', '75', '47', '17']);