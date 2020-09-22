function solve(arr, magicSum){
 

    for (let index =0;index<arr.length;index++){
        let element = arr[index];
        

        for (let i = index+1;i<arr.length;i++){
            let next=arr[i];
            if (element+next == magicSum){
               console.log(`${element} ${next}`)
            }
         
            }
        
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
    )