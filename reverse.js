function login(input){
    let password = input.split('').reverse().join('');
    console.log(password)
}
login(`Hello`)