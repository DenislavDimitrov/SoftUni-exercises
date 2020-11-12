function solve(input) {
    let racers = input[0].split(", ")
    let raceInfo = {};
    for (let data of input.slice(1)) {
        if (data!=='end of race') {
            let nameMatch = data.match(/[A-Za-z]+/g)
            let name = nameMatch.join("");

            if (nameMatch && racers.includes(name)) {

                let distanceMatch = data.match(/[0-9]/g)
                let distance = calculateDistance(distanceMatch);
                if(!raceInfo[name]){
                    raceInfo[name] = 0;
                }
                raceInfo[name]+=distance
            }
        }
    }

    let topThreeRacers = Object.keys(raceInfo).sort((racerOne,racerTwo)=>raceInfo[racerTwo] - raceInfo[racerOne]).slice(0, 3);
    for (let index in topThreeRacers){
        switch (index) {
            case '0':
                console.log(`1st place: ${topThreeRacers[index]}`);break;
            case '1':
                console.log(`2nd place: ${topThreeRacers[index]}`);break;
            case '2':
                console.log(`3rd place: ${topThreeRacers[index]}`);break;

        }
    }
    function calculateDistance(arr){
        let totalDistance = 0;
        for (let digit of arr.slice(0)){
            totalDistance+=Number(digit);
        }
        return totalDistance
    }

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])