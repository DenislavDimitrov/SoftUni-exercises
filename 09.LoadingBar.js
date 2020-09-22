function solution(number){
    
    
    function percentage(perc){

        let symbolCounts = perc/10
        let symbols = '';
        for (i = 0; i < symbolCounts;i++){
            symbols+='%'
        }
        return symbols
    }
    let symbs = percentage(number);

    function points(perc){

        let symbolCounts = 10-(perc/10)
        let symbols = '';
        for (i = 0; i < symbolCounts;i++){
            symbols+='.'
        }
        return symbols
    }
    let pointSss = points(number);
    
    if (number == 100){
        console.log("100% complete!")
        console.log("[%%%%%%%%%%]")
    } else{
        console.log(`${number}% [${symbs}${pointSss}]`)
        console.log("Still loading...");
        
    }
    
   
}
solution (0)