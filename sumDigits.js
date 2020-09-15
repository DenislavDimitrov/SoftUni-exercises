function solve(number){

    number = number.toString();
    let sum = 0;
    for (let position = 0; position < number.length; position++){
        sum+=Number(number[position])
    }
console.log(sum)


} 
solve(359)