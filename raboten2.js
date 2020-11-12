let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/;
let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
let result = text.match(patternLiteral)
//console.log(result)
console.log(result[0])
//console.log(result.groups)