function yards(input){
     let meters = Number(input.shift());
     let price = meters * 7.61;
     let discount = (price * 18 / 100).toFixed(2);
     let finalprice = (price - discount).toFixed(2);
    console.log (`The final price is: ${finalprice} lv.`);
    console.log (`The discount is: ${discount} lv.`)
}
yards (["540"])