function solve (input){
    let dogs = Number(input.shift());
    let otherAnimals = Number(input.shift());
    let dogFood = 2.50;
    let otherFood = 4;
    let result = (dogs*dogFood + otherAnimals*otherFood).toFixed(2);
    console.log (`${result} lv.`);


}
solve (["5", "4"])