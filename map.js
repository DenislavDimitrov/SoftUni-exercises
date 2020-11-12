let map = new Map();
map.set('Pesho', '99946')
map.set('age', 30)
map.delete('age')
if (map.has('age')){
    console.log(`found`)
    console.log(map.get('age'))
}
else {
    console.log('no')
}
let keysArray = Array.from(map.keys());
console.log(keysArray)
for (const key of map.keys()){
    console.log(key)
}
for (const key of map.values()){
    console.log(key)
}for (const key of map.entries()){
    console.log(key)
}
console.log((map.keys()))
console.log(map.get('Pesho'))
map.clear()
console.log(map)