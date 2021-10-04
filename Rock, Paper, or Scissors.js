const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if(userInput == "rock" ||
    userInput == "paper" ||
    userInput == "bomb" ||
    userInput == "scissors" ){
      return userInput
    } else{
      console.log("Please input 'rock', 'paper', or scissors")
    }

}

const getComputerChoice = function (){
  const array = ['rock', 'paper', 'scissors']
  const index = Math.floor(Math.random() * 3)
  return array[index]
}

function determineWinner(userChoice, computerChoice) {

  if(userChoice === "bomb") return "User wins this round"

  if(userChoice === computerChoice){
    return "Game was a tie"
  }

  if(userChoice === "rock"){
    if(computerChoice === "paper" ){
      return "Computer wins this round"
    }else {
      return "User wins this round"
    }
  }

  if(userChoice === "paper"){
    if(computerChoice === "scissors" ){
      return "Computer wins this round"
    }else {
      return "User wins this round"
    }
  }

  if(userChoice === "scissors"){
    if(computerChoice === "rock"  ){
      return "Computer wins this round"
    }else {
      return "User wins this round"
    }
  }
}

function playGame(){
  const userChoice = getUserChoice("bomb")
  const computerChoice = getComputerChoice()

  console.log({userChoice, computerChoice})

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()