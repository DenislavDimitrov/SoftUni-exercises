function solve(arr) {
    
    let sumLeft = 0;
    let sumRight = 0;

    for (var center = 1; center < arr.length; center++) {

        let centerElement = arr[center];
        
        
        for (let left = center -1; left >= 0; left--) {
            let leftElement = arr[left];
            sumLeft += leftElement
            }

        for (let right = center + 1; right < arr.length; right++) {
            let rightElement = arr[right];
            sumRight += rightElement
             }
             if (sumLeft != sumRight){
                 sumRight=0
                 sumLeft=0
             }
             else{
                 break;
             }
        

    }
    if (arr.length==1){
        console.log(0)
    }
    else if (sumRight == sumLeft && sumLeft!==0){
        console.log(center)
    }
    else {
        console.log(`no`)
    }
    
}
solve([1, 2, 3])