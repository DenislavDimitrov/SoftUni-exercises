let numbers = new Map();

numbers.set('Three', 3);
numbers.set('One', 1);
numbers.set('Two', 2)


let entries = Array.from(numbers.entries())
let sortedEntries = entries.sort((a,b) => {
    return a[1] - b[1];
    return a[0].localeCompare(b[0])
})
for (const kvp of sortedEntries){
    console.log(`${kvp[0]} -> ${kvp[1]}`)
}
console.log(sortedEntries)