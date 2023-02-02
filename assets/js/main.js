const chooseRounds = document.querySelector("#chooseRounds")
const userChoiceInput = document.querySelector("#userChoiceInput")



let numberOfRounds
chooseRounds.addEventListener('change', (e) => {
    numberOfRounds = parseInt(e.target.value)
    chooseRounds.style.display="none"
    console.log(numberOfRounds)
})


console.log(numberOfRounds)/* undefined with no value */

const computerChoiceArray = ["rock","paper","scissors"]
let computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
console.log(computerChoice)


let roundsPlayed

let userChoice 

userChoiceInput.addEventListener('click', (e) => {
    
    console.log(e.target.class)
})