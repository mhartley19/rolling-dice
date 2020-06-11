function rollingdice(){
    let results = []
    for (i=1; i<=10; i++){
        let x = Math.floor(Math.random()*6 + 1) + 
        Math.floor(Math.random()*6 + 1);
        results.push(x)
    }
    return results
}

y = rollingdice()


let dice = document.getElementById("diceroll")
let sumOfDice = document.createTextNode(y)

dice.appendChild(sumOfDice)

