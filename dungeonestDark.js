function solve(input){
    let newArr = input[0].split("|")
    let array = [];
    let health = 100;
    let coins = 0;
    let isDead = false;
    let rooms = 0;
    let heal = 0;

    for (i=0;i<newArr.length;i++){
        var split = newArr[i].split(" ");
        array.push(split[0])
        array.push(split[1])
    
    }
    for (let i =0; i < array.length;i++){
        rooms++
        if (array[i] == 'potion'){
            heal = Number(array[i+1])
            if (health + heal > 100){
                heal = 100 - health;
                health = 100;
            }
            else{
                health += Number(array[i+1])
            }
            console.log(`You healed for ${heal} hp.`)
            console.log(`Current health: ${health} hp.`)
        }
        else if (array[i]=='chest'){
            coins += Number(array[i+1])
            console.log(`You found ${array[i+1]} coins.`)
        }
        else {
            health-=array[i+1];
            if (health<=0){
                console.log(`You died! Killed by ${array[i]}.`)
                console.log(`Best room: ${rooms}`)
                isDead = true;
                break;
            }
            else {
                console.log(`You slayed ${array[i]}.`)
            }
        }
        i++
    }
 
    if (isDead == false){
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
    

}
solve (['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])