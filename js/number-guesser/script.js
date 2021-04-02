let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (player, ref) => {
    return Math.abs(player - ref);
}

const compareGuesses = (human, computer, target) => {
    humanDelta = getAbsoluteDistance(human, target);
    computerDelta = getAbsoluteDistance(computer, target);
    if (humanDelta < computerDelta) {
        return true;
    } else if(computerDelta < humanDelta) {
        return false;
    } else if(humanDelta === computerDelta) {
        return true;
    }
}

const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore += 1;
    } else if(winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}