function solve(number, precisionNumber){
    if (precisionNumber>15){
        precisionNumber = 15
    }
    console.log(parseFloat(number.toFixed(precisionNumber)))

}
solve(10.5,20)