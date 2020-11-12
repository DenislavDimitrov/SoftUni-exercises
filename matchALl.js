let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting Industry.'

let pattern = /(?<firstLetter>[A-Z])[a-z]+/g;



let matches = text.matchAll(pattern)
for (const match of matches){
    console.log(match)
}

