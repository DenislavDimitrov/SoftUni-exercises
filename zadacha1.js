function solve(input){
    let contacts = {}
    for (let line of input){
        let [name, phone] = line.split(' ');
    contacts[name] = phone
    }
    Object.keys(contacts).forEach(key => {
        console.log(`${key} -> ${contacts[key]}`)
    })
}
solve(
['Tim 083421255439',
'Peter 087754788739',
'Bill 089654311239',
'Tim 087656634439'])




