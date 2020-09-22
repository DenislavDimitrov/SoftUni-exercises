function solution(number){

    function row(x){
        let rowHolder = '';
        for (i = 0; i <x; i++){
            rowHolder+=x+' '
        }
        return rowHolder
    }
    let loops = 0;
    while (loops < number){
        console.log(row(number))
        loops++
    }
    
}
solution (21)