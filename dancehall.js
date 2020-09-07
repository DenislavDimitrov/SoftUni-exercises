function zala(input) {

    let zalalength = Number(input.shift());
    let zalawidth = Number(input.shift());
    let stranagarderob = Number(input.shift());

    let zalacm = (zalalength * 100) * (zalawidth*100);
    let garderob = (stranagarderob*100)*(stranagarderob*100);
    let bench = zalacm/10;
    let dancerspace = 40 + 7000;

    let free = zalacm - (garderob + bench);
    console.log (Math.floor(free / dancerspace));

    }
    zala([
    "50",
    "25",
    "2"
    ]);
    