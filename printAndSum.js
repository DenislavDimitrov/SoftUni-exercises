function printSum(number1, number2){
    let row = '';
    let sum = 0;
    for (i = number1; i<=number2;i++){
        row += i + " ";
        sum += i;
    }
    console.log (row)
    console.log (`Sum: ${sum}`)
}
printSum(5,10)