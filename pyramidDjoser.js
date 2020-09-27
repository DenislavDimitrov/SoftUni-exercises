function pyramid(base, increment) {
    let steps = 0;
    let gold = 0;
    let counter =0;
    let areaStone = 0;
    let marble = 0;
    let lazuli = 0;

    if (base % 2 == 0) {
        steps = 2;
        gold = 4 * increment;
    }
    else {
        steps = 1
        gold = 1 * increment;
    }

    for (i = base; i > steps; i -= 2) {
        counter++
        areaStone+= ((i-2)*(i-2))*increment

        if (counter%5==0){
            lazuli += ((i*i)-((i-2)*(i-2)))*increment
        }
        else {
        marble+= ((i*i)-((i-2)*(i-2)))*increment
            
        }
    }
    console.log(`Stone required: ${Math.ceil(areaStone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor((counter+1)*increment)}`)
}
pyramid(12, 1)