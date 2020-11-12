let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;
let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
let result = patternLiteral.exec(text)


while(result) {
    console.log(result[0])
    result = patternLiteral.exec(text)
}


