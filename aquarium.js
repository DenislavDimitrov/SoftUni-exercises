function aquarium (input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentage = Number(input.shift());

    let volume = length * width * height;
    let liters = volume * 0.001;
    let result = liters - liters * percentage / 100;
console.log (result.toFixed(3));

}
aquarium (['85', '75', '47', '17'])
