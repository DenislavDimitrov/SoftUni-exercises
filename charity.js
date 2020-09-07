function charity(input){
    let days = Number(input.shift());
    let sladkari = Number(input.shift());
    let torta = Number(input.shift());
    let gofreta = Number(input.shift());
    let palachinka = Number(input.shift());

    let sumatortaden = torta * 45;
    let sumagofretaden=gofreta * 5.80;
    let sumapalachinkaden = palachinka * 3.20;

    let sumaotsladkari = (sumatortaden + sumagofretaden + sumapalachinkaden)*sladkari;
    let wholesum = sumaotsladkari * days;
    let result = wholesum - (wholesum/8);
    console.log(result.toFixed(2));
    }
    charity([
    "20",
    "8",
    "14",
    "30",
    "16"
    ])
    