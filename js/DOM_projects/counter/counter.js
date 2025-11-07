

const decreaseBtn = document.getElementById("decreaseButton")
const increaseBtn = document.getElementById("increaseButton")
const resetBtn = document.getElementById("resetButton")
const myNumber = document.getElementById("myNumber")




let count = 0

increaseBtn.onclick = () => {
    count++
    myNumber.textContent = count
}
decreaseBtn.onclick = () => {
    count--
    myNumber.textContent = count

}
resetBtn.onclick = () => {
    count = 0
    myNumber.textContent = count

}

