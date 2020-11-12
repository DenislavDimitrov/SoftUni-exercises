let uniqueNames = new Set(['Pesho', "Pesho",'Gosho']);
uniqueNames.add('Pesho')
uniqueNames.add('Gosjo')
uniqueNames.add('Stamat')
uniqueNames.add('Stamat')
let uniqueArr = Array.from(uniqueNames)
console.log(uniqueArr)
console.log(uniqueNames)
uniqueNames.forEach(name=>console.log(name))

