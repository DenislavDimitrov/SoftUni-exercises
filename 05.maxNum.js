function solve(arr) {
    let result = "";

    for (let index = 0; index < arr.length; index++) {

        let element = arr[index];
        let isBigger = true;
        
        for (let i = index + 1; i < arr.length; i++) {
            let nextElement = arr[i];
            if (element <= nextElement) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result += `${element} `
        }

    }
    console.log(result)
}
solve([41, 41, 34, 20])