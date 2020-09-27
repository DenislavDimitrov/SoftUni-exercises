function distance(x1,y1,x2,y2){
    let distance = (Math.abs((x1-x2)*(x1-x2)))+(Math.abs((y1-y2)*(y1-y2)))
    console.log(Math.sqrt(distance))
}
distance(2.34, 15.66, -13.55, -2.9985)