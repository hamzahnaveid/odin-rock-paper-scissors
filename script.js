// 1. Write the logic to get computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    switch(computerChoice) {
        case 1 :
            return 'ROCK'
            break
        case 2 :
            return 'PAPER'
            break
        case 3 :
            return 'SCISSORS'
    }
}


// 2. Write the logic to get the human choice
function getHumanChoice() {
    let humanChoice = prompt('Type in your choice (rock, paper, or scissors) \nN.B Spelling matters!')
    humanChoice = humanChoice.toUpperCase()
    if (humanChoice != 'ROCK' && humanChoice != 'PAPER' && humanChoice != 'SCISSORS')
        {
            alert('Invalid choice! Setting choice to ROCK')
            return 'ROCK'
        }
    return humanChoice
}

// 3. Declare player score variables
let humanScore = 0
let computerScore = 0

// 4. Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (computerChoice == 'ROCK') {
        switch(humanChoice) {
            case 'ROCK' :
                console.log('TIE! No points awarded')
                break
            case 'PAPER' :
                console.log('YOU WIN! PAPER beats ROCK')
                humanScore++
                break
            case 'SCISSORS' :
                console.log('YOU LOSE! ROCK beats SCISSORS')
                computerScore++
                break
        }
    }
    else if (computerChoice == 'PAPER') {
        switch(humanChoice) {
            case 'ROCK' :
                console.log('YOU LOSE! PAPER beats ROCK')
                computerScore++
                break
            case 'PAPER' :
                console.log('TIE! No points awarded')
                break
            case 'SCISSORS' :
                console.log('YOU WIN! SCISSORS beats PAPER')
                humanScore++
                break
        }
    }
    else { //when computerChoice is SCISSORS
        switch(humanChoice) {
            case 'ROCK' :
                console.log('YOU WIN! ROCK beats SCISSORS')
                humanScore++
                break
            case 'PAPER' :
                console.log('YOU LOSE! SCISSORS beats PAPER')
                computerScore++
                break
            case 'SCISSORS' :
                console.log('TIE! No points awarded')
                break
        }
    }
}


// 5. Write the logic to play the entire game