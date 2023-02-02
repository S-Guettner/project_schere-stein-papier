/* =============== input ================= */
const inputButtons = document.querySelector("#inputButtons")
const rockButton = document.querySelector("#rockButton")
const paperButton = document.querySelector("#paperButton")
const scissorButton = document.querySelector("#scissorButton")
const chooseRounds = document.querySelector("#chooseRounds")
const resetButton = document.querySelector("#resetButton")
/* =============== output ================= */
const outputResult = document.querySelector("#outputResult")
const userScoreOutput = document.querySelector("#userScoreOutput")
const computerScoreOutput = document.querySelector("#computerScoreOutput")
const outputRoundsPlayed = document.querySelector("#outputRoundsPlayed")
const outputRounds = document.querySelector("#outputRounds")

/* user input for number of rounds */
let numberOfRounds
chooseRounds.addEventListener('change', (e) => {
    numberOfRounds = parseInt(e.target.value)
    chooseRounds.style.display="none"
    outputRounds.innerHTML = numberOfRounds
})

let userScore = 0
let computerScore = 0
let roundsPlayed = 0

const play = (userInput) => {
    const computerChoiceArray = ["rock","paper","scissor"]
    let computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
    let userChoice = userInput
    roundsPlayed++
/* checks if user choosed number of rounds */
    if(numberOfRounds != undefined){
        if (computerChoice === "rock" && userChoice === "paper"){
            outputResult.innerHTML = "You Win Paper beats Rock" 
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
            
        else if (computerChoice === "rock" && userChoice === "scissor"){
            outputResult.innerHTML = "You Lose! Rock beats scissor."
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
            
    
        else if (computerChoice === "rock" && userChoice === "rock"){
            outputResult.innerHTML = "Rock VS Rock No Winner!"
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "paper"){
            outputResult.innerHTML = "Paper VS Paper No Winner!"
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "rock"){
            outputResult.innerHTML = "You Lose! Paper beats Rock."  
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "scissor"){
            outputResult.innerHTML = "You Win! Scissor beats Paper." 
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }    
        
        else if (computerChoice === "scissor" && userChoice === "rock"){
            outputResult.innerHTML = "You Win! Rock beats scissor."
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "scissor" && userChoice === "paper"){
            outputResult.innerHTML = "You Lose! Scissor beats Paper." 
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "scissor" && userChoice === "scissor"){
            outputResult.innerHTML = "Scissor VS Scissor No Winner!"
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }

        /* checks for winner if all rounds have been played */
        if(roundsPlayed === numberOfRounds){
            inputButtons.style.display="none"
            if(userScore > computerScore){
                outputResult.innerHTML = "User Won"
            }else if(userScore < computerScore){
                outputResult.innerHTML = "Computer Won"
            }else{
                outputResult.innerHTML = "No winner it is a draw"
            }
        }
    }else{
        alert("Choose the number of rounds")
    }
}
/* resets the game */
resetButton.addEventListener('click', () => {
    inputButtons.style.display="block"
    chooseRounds.style.display="block"
    userScoreOutput.innerHTML = userScore = 0
    computerScoreOutput.innerHTML = computerScore = 0
    outputRoundsPlayed.innerHTML = roundsPlayed = 0
})

