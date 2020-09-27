function sorting(a,b,c){
    var numbers = [a,b,c];
    numbers.sort(function sorting(a, b, c){
        return b-a
    })
    console.log(numbers.shift())
    console.log(numbers.shift())
    console.log(numbers.shift())


}
sorting(3,4,1)