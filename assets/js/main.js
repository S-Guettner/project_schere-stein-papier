const chooseRounds = document.querySelector("#chooseRounds")
const outputResult = document.querySelector("#outputResult")
const userScoreOutput = document.querySelector("#userScoreOutput")
const computerScoreOutput = document.querySelector("#computerScoreOutput")

const outputRoundsPlayed = document.querySelector("#outputRoundsPlayed")
const outputRounds = document.querySelector("#outputRounds")

const inputButtons = document.querySelector("#inputButtons")


let numberOfRounds
chooseRounds.addEventListener('change', (e) => {
    numberOfRounds = parseInt(e.target.value)
    chooseRounds.style.display="none"
    outputRounds.innerHTML = numberOfRounds
    console.log(numberOfRounds)
})


/* console.log(numberOfRounds)undefined with no value */





/* let userChoice

const getUserChoice = (userInput) => {
    userChoice = userInput
    console.log(userChoice)
} */

let userScore = 0
let computerScore = 0

let roundsPlayed = 0


const play = (userInput) => {
    const computerChoiceArray = ["rock","paper","scissor"]
    let computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
    
    let userChoice = userInput
    console.log(computerChoice)
    console.log(userChoice)

    if(numberOfRounds != undefined){
        if (computerChoice === "rock" && userChoice === "paper"){
            outputResult.innerHTML = "You Win Paper beats Rock" 
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
            
        else if (computerChoice === "rock" && userChoice === "scissor"){
            outputResult.innerHTML = "You Lose! Rock beats scissor."
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
            
    
        else if (computerChoice === "rock" && userChoice === "rock"){
            outputResult.innerHTML = "Rock VS Rock No Winner!"
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "paper"){
            outputResult.innerHTML = "Paper VS Paper No Winner!"
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "rock"){
            outputResult.innerHTML = "You Lose! Paper beats Rock."  
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "paper" && userChoice === "scissor"){
            outputResult.innerHTML = "You Win! Scissor beats Paper." 
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }    
        
        else if (computerChoice === "scissor" && userChoice === "rock"){
            outputResult.innerHTML = "You Win! Rock beats scissor."
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "scissor" && userChoice === "paper"){
            outputResult.innerHTML = "You Lose! Scissor beats Paper." 
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            computerScore++
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        
        else if (computerChoice === "scissor" && userChoice === "scissor"){
            outputResult.innerHTML = "Scissor VS Scissor No Winner!"
            roundsPlayed++
            outputRoundsPlayed.innerHTML = roundsPlayed
            userScoreOutput.innerHTML = userScore
            computerScoreOutput.innerHTML = computerScore
            }
        if(roundsPlayed === numberOfRounds){
            inputButtons.style.display="none"
            if(userScore > computerScore){
                outputResult.innerHTML = 
            }
        }
    }else{
        alert("Choose the number of rounds")
    }

}