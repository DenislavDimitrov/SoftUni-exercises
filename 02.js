function solve(input) {
    let targets = input[0].split('|').map(Number);
    let commands = input.slice(1);
    let points = 0;
    let d = commands.length
    

    for (let i = 0; i < d; i++) {
        let element = commands[i].split('@')
        let direction = element[0]
        let index = Number(element[1]);
        let length = Number(element[2])

        if (direction == "Game over") {
            console.log(targets.join(' - '));
            console.log(`Iskren finished the archery tournament with ${points} points!`);
        }
        else if (direction == "Reverse") {
            targets.reverse();
        }

        if (index >= 0 && index < targets.length) {
            if (direction == 'Shoot Left') {
                let currentTarget = index - length ;
                if (currentTarget < 0) {
                    currentTarget *= -1
                    let v = currentTarget % targets.length
                    if (v==0){
                        currentTarget= targets.length-1
                    }
                    else {
                    currentTarget = targets.length - v +1;
                    }
                }
                
                targets[currentTarget] -= 5;
                if (targets[currentTarget] < 0) {
                    targets[currentTarget] = 0;
                }
                points += 5

            }
            else if (direction == "Shoot Right") {
                let currentTarget = index + length;
                if (currentTarget > targets.length) {
                    let v = currentTarget % targets.length
                    currentTarget = v-1;
                }
                targets[currentTarget] -= 5;
                if (targets[currentTarget] < 0) {
                    targets[currentTarget] = 0;
                }
                points += 5
            }
        }

    }
}
solve([
    "20|30|40|50|60",
    "Shoot Left@0@12",
    "Shoot Right@4@15",
    "Shoot Left@6@5",
    "Reverse",
    "Game over"
])