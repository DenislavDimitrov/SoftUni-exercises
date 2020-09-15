function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let counter = 0;
    let isHelmetBroken = false;
    let isSwordBroken = false;
    let isShieldBroken = 0;

    for (i=1; i<=lostFights;i++){
        counter++
        if (counter%2==0 && counter !== 0){
            isHelmetBroken = true;
            expenses+=helmetPrice
        }
        if (counter%3==0 && counter !== 0){
            isSwordBroken = true;
            expenses+=swordPrice
        }
        if(isSwordBroken && isHelmetBroken){
            isShieldBroken++
            expenses+=shieldPrice
        }
        if(isShieldBroken%2==0 && isShieldBroken!== 0){
            expenses+=armorPrice
            isShieldBroken=0
        }
        isHelmetBroken=false
        isSwordBroken=false
        
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
  
}
gladiator(23,
    12.50,
    21.50,
    40,
    200        
    )