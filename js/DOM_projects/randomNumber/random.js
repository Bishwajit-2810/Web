// const min = 100
// const max = 999
// let randomNumber = Math.floor(Math.random() * (max - min)) + min



const rollButton = document.getElementById("rollBtn")
const resetButton = document.getElementById("resetBtn")
const myDiceNumber = document.getElementById("myDice")



rollButton.onclick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    myDiceNumber.textContent = randomNumber

}

resetButton.onclick = () => {

    myDiceNumber.textContent = 0

}
