function solution (password){
    
    let isDigit = (x) => x >= 48 && x <= 57; 
   if (!isLengthEnough(password)){
    console.log(`Password must be between 6 and 10 characters`)
   };
   if (!isAlphabetical(password)){
       console.log (`Password must consist only of letters and digits`)

   }
   if (!isContainsTwoDigits(password)){
       console.log(`Password must have at least 2 digits`);
   }
   if (isLengthEnough(password) && isAlphabetical(password) && isContainsTwoDigits(password)){
       console.log('Password is valid')
   }
    
    function isLengthEnough(pass){
        return pass.length >= 6 && pass.length <=10
    }
    function isAlphabetical(pass){
        
        let isLowerLetter = (x) => x >= 97 && x <= 122;
        let isUpperLetter = (x) => x >= 65 && x <= 90;

        let isOk = true;

        for (let char of pass){
            let numberValue = char.charCodeAt(0);  
            if (!isDigit(numberValue) && !isLowerLetter(numberValue) && !isUpperLetter(numberValue)){
                isOk = false;
                break;
            }        
        }
        return isOk;
    }
    function isContainsTwoDigits(pass){
        let counter = 0;
        let isOk = false;
        for (let char of pass){
            let n = char.charCodeAt(0);
            if (isDigit(n)){
                counter ++
            }
            if (counter === 2){
                isOk = true;
                break;
            }
        }
        return isOk
    }
}
solution(`MyPass123`)