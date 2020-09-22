function solve(numbers){
    let newArray = [];
    let sumNumbers = 0;
    let newSum = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]%2 == 0){
            newArray[i]=numbers[i]+i
        }
        else {
            newArray[i]=numbers[i]-i
        }
        sumNumbers+=numbers[i]
        newSum+=newArray[i]
        
        
    }
    console.log(newArray)
    console.log(sumNumbers)
    console.log(newSum)
}


// console.log(numbers[i])
solve([5, 15, 23, 56, 35])