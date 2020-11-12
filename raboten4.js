let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;
let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting Industry.'




    let result = patternLiteral.exec('Lorem Ipsum')
console.log(result)
    result = patternLiteral.exec('Lorem Ipsum')
console.log(result)
