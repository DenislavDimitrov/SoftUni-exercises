let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting Industry.'

let pattern = /(?<firstLetter>[A-Z])[a-z]+/g;



let result = text.replace(pattern, 'Morem')
console.log(result)