let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration=true;
let runnerAge=18;
if(runnerAge>18 && earlyRegistration){
  raceNumber+=1000
}
if(runnerAge>18 && earlyRegistration){
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`)
}
else if(runnerAge>18 && !earlyRegistration){
  console.log(`Late adults run at 11:00am and your number is ${raceNumber}`)
}
else if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30pm and your number is ${raceNumber}`)
}
else{
  console.log('See the registration desk')
}