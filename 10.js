function solution(first,second){




    function firstFactorial(x){
        let sum =x;
        for (i=1;i<x;i++){
            sum*=i
        }
        return sum;
    }
    let firstNum = firstFactorial(first);

    function secondFactorial(x){
        let sum =x;
        for (i=1;i<x;i++){
            sum*=i
        }
        return sum;
    }
    let secondNum = secondFactorial(second);

    console.log((firstNum/secondNum).toFixed(2))

}
solution (6,2)