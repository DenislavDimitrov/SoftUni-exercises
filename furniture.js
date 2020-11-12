function solve(input) {
    let patternLiteral = />>[A-Za-z]+<<[0-9]*\.?[0-9]+![\d]+/g;
    let product = input.shift()
    let typeArray = [];
    let totalMoney = 0;
    while (product !== 'Purchase') {

        let result = product.match(patternLiteral)
        if (result !== null) {

            let typePattern = /[A-Za-z]+/g;
            let type = result[0].match(typePattern)
            typeArray.push(type)
            let pricePattern = /[0-9]*\.?[0-9]+/g;
            let price = result[0].match(pricePattern)
            totalMoney+= price[0]*price[1]

        }

            product = input.shift()
    }
    console.log("Bought furniture:")
    console.log(typeArray.join("\n"))
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])