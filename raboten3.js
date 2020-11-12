let value = 'Lisa Smith'
let contacts= {
    [value]: '231312',
    'John Doe': '313123',
    'Jane Doe': '31321388',
    'Peter Petrow': '31232166'
}
for (let key in contacts){
    console.log(contacts[key])
    console.log(key)
}
