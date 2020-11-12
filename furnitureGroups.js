function solve(input) {
    let boughtFurnitures = [];
    let totalMoneySpent = 0;
    for (let data of input) {
        let match = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]*\.?[0-9]+)!(?<quantity>[\d]+)/g.exec(data);
        if (match) {
            boughtFurnitures.push(match.groups.name);
            totalMoneySpent+=Number(match.groups.price)*Number(match.groups.quantity)
        }

    }

    console.log("Bought furniture:")
    if (boughtFurnitures.length>0) {
        console.log(boughtFurnitures.join("\n"))
    }
    console.log(`Total money spend: ${totalMoneySpent.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])