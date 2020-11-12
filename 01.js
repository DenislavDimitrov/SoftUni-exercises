function solve(input){
    let moneyNeeded = Number(input.shift());
    let months = Number(input.shift());
    let saved = 0;

    for (let i = 1; i<=months;i++){
        if (i%2!==0 && i !==1){
            saved*=0.84
        }
        if(i%4==0){
            saved*=1.25
        }
        saved+= (moneyNeeded*0.25)
    }
    if (saved>=moneyNeeded){
        console.log(`Bravo! You can go to Disneyland and you will have ${(saved-moneyNeeded).toFixed(2)}lv. for souvenirs.`);
    }
    else {
        console.log(`Sorry. You need ${(moneyNeeded-saved).toFixed(2)}lv. more.`);
        
    }
    
}
solve(["1000",
"4"])