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


// 4. Write the logic to play a single round


// 5. Write the logic to play the entire game