function solution(first,second,third){
    let sum = sumTwo(first,second)
    let result = substract(sum, third)
    console.log(result)
    function sumTwo(a,b){
        return (a+b);
    }

    function substract(a, b){
        return (a - b);
    }
}
solution(23,6,10)