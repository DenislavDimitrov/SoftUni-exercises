function architect (input){
    let name = input.shift();
    let count = Number(input.shift());

    console.log (`The architect ${name} will need ${count*3} hours to complete ${count} project/s.`)
}
architect (["George", "4"]);