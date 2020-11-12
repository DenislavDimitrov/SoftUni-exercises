let text = 'Lorem Ipsum is simply dummy text of the at printing and typesetting Industry.'

let pattern = /(?<firstLetter>[A-Z])[a-z]+/g;



let result = text.split(/ [a-z]{2} /g)
console.log(result)