function bitcoin(input){
    let bitcoin = 11949.16
    let gGold = 67.51

    let bitcoinNumber = 0;
    let firstDay;
    let totalMoney = 0;
    
    for (let i=1; i <= input.length; i++){
        let goldMined = input[i-1];
        if (i % 3 === 0){
            goldMined *= 0.7;
            totalMoney += goldMined*gGold
        } else{
            totalMoney += goldMined*gGold
        }

        if (totalMoney>=bitcoin){
            if(firstDay===undefined){
                firstDay=i;
            }
            bitcoinNumber+=parseInt(totalMoney/bitcoin);
            totalMoney -= parseInt(totalMoney/bitcoin)*bitcoin;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinNumber}`)
    if ( firstDay !== undefined){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)

        
}
bitcoin([100,200,300])