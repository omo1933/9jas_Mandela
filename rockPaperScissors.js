const getUserChoice=(userInput)=>{
userInput=userInput.toLowerCase();
if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
  return userInput;
}
else{
  console.log('error');
}
}
getUserChoice('scissors');

const getComputerChoice=()=>{
  let randomNumber=Math.floor(Math.random()*3)
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
   return 'scissors';
   break;
    default:
}
}

const determineWinner=(getUserChoice,getComputerChoice)=>{
  if (getUserChoice===getComputerChoice){
    return 'game was a tie';
  }
  else if(getUserChoice==='rock'){
    if(getComputerChoice==='paper'){
      return 'computer won';
    }
    else{
      return 'user won'
    }
  }
  else if (getUserChoice==='paper'){
    if(getComputerChoice==='scissors'){
      return 'computer won';
    }
    else if(getComputerChoice==='rock'){
      return 'user won'
    }
  }
   else if (getUserChoice==='scissors'){
    if(getComputerChoice==='paper'){
      return 'user won';
    }
    else if(getComputerChoice==='rock'){
      return 'computer won'
    }
  }
}

const playGame=()=>{
  let userChoice=getUserChoice('rock')
  let computerChoice=getComputerChoice()
  console.log(`you played ${userChoice}`)
  console.log(`computer played ${computerChoice}`)
   console.log(determineWinner(userChoice, computerChoice));
};
playGame();