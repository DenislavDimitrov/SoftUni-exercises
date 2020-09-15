function spice(firstDayYield){
    let days = 0;
    let totalAmount = 0;

    while (firstDayYield>=100){
        totalAmount+=firstDayYield;
        firstDayYield-=10
        if(totalAmount>=26){
            totalAmount-=26
        }
        days++
    }
    if(totalAmount>=26){
        totalAmount-=26
    }

    console.log(`${days}`)
    console.log(`${totalAmount}`)
  
}
spice(200)