function borsa(input){
    let whiskyleva = Number(input.shift());
    let litersbeer = Number(input.shift());
    let litersvino = Number(input.shift());
    let litersrakia = Number(input.shift());
    let literswhisky = Number(input.shift());
    let rakialeva = whiskyleva / 2;
    let vinoleva = rakialeva - (rakialeva*40 / 100);
    let beerleva = rakialeva - (rakialeva*80/100);
    let result = (whiskyleva*literswhisky) + (litersbeer*beerleva)+(litersvino*vinoleva)+(rakialeva*litersrakia);
    console.log(result.toFixed(2));
    }
    borsa([
    "50",
    "10",
    "3.5",
    "6.5",
    "1"
    ])
    