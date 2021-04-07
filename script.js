let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//it will generate a random number 'Target' between [0,9]
const generateTarget = () => {
    return Math.floor((Math.random()*10)) 
}

//it will compare whose guess is closer to the target
function compareGuesses(humanGuess, computerGuess, targetNumber){
    if((humanGuess) === (computerGuess)){
        return true;
    }else if(getAbsoluteDistance(humanGuess, target) < getAbsoluteDistance(computerGuess, target)){
        return true;
    }else return false;
}

//it will update the score for each round depending upon whos the winner

function updateScore(winner) {
    switch(winner){
        case 'computer' :
            computerScore +=1;
            break;
        
        case 'human' :
            humanScore += 1;
            break;
        
        default :
            humanScore += 1;
    }
}

//increasing the round number after each round
function advanceRound() {
    currentRoundNumber += 1;
}


//calculating the absolute distance from the target
const getAbsoluteDistance = (guess, target) => {
    return Math.abs(guess - target);
}