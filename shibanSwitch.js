function solve(day, age) {
  let price = 0;

  if (age >= 0 && age <=18) {
    switch(day){
        case "Weekday":
        console.log(price+12+'$')    
        ; break;
        case "Weekend": 
        console.log(price+15+'$')    
        ; break;
        case "Holiday":
          console.log(price+5+'$')    
        ; break;
    }
  }
else if (age > 18 && age <=64){
  switch(day){
    case "Weekday":
      console.log(price+18+'$')    
    ; break;
    case "Weekend": 
    console.log(price+20+'$')  
    ; break;
    case "Holiday":
      console.log(price+12+'$')     
    ; break;
}
}
else if(age > 64 && age <=122){
  switch(day){
    case "Weekday":
      console.log(price+12+'$')     
    ; break;
    case "Weekend": 
    console.log(price+15+'$')  
    ; break;
    case "Holiday":
      console.log(price+10+'$')     
    ; break;
}
}
else {console.log('Error!')}
}


solve("Weekday", 100)