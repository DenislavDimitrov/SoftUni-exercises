function solve(firstArr, secondArr){
    let newArr = [];
    let result = '';
        for (let i = 0; i < firstArr.length; i++){
          if (i%2===0){
              result = Number(firstArr[i])+Number(secondArr[i])
          }
          else {
              result = firstArr[i]+secondArr[i]
          }
          newArr.push(result)
        }
        console.log(newArr.join(' - '))
    }
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)