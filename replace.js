function solve(first, char, second){
    let res = first.replace('_', char)
    let output = res === second ? "Matched" : "Not Matched";
    console.log(output)
}
solve('Str_ng', 'I', 'Strong')