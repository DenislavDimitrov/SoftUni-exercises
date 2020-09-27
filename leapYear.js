function leapyear(year){


    let leap = (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0 ? 'yes' : 'no';
    console.log(leap)
}
leapyear(1984)