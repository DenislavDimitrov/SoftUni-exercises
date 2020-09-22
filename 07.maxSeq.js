function solve(arr){
    let best = [];
    for (let index =0;index<arr.length;index++){
        let element = arr[index];
        let current = [element];

        for (let i = index+1;i<arr.length;i++){
            let next=arr[i];
            if (element===next){
                current.push(next);
                index = i;
              }  else {
                break;
                }
            }
            if (current.length>best.length){
                best=current;
            }
        }
        console.log(best.join(' '))
    }

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])