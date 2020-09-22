function solution(number){
    function sum(num){
    let sum = 0;
    for (i = 1; i < num; i ++){
        if (num % i == 0){
            sum += i
        }
    }
    return sum
}

    let theSum = sum(number)
    if (theSum == number){
        console.log (`We have a perfect number!`)
    }
    else {
        console.log(`It's not so perfect.`);
        
    }



}
solution (6);