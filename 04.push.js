function solve(array, number){
    let result = '';
    let a = 0;
        for (let i = 0; i < number; i++){
            a = array.shift()
            array.push(a);  
        }
        console.log(array.join(' '))
    }
solve([51, 47, 32, 61, 21], 2
)