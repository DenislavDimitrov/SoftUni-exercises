function calculator(number1, char, number2){
    let sum = 0;
    if (char === '+'){
        console.log((number1+number2).toFixed(2))
    }
    else if(char === '-'){
        console.log((number1-number2).toFixed(2))
    }
    else if(char === '*'){
        console.log((number1*number2).toFixed(2))
    }
    else if(char === '/'){
        console.log((number1/number2).toFixed(2))
    }
   
}
calculator(10,
    '/',
    5
    )