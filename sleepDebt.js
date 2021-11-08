function getSleepHours(day){
  if (day==='monday'){
    return 8;
  }
  if (day==='tuesday'){
    return 8;
  }
  if (day==='wednesday'){
    return 8;
  }
  if (day==='thursday'){
    return 8;
  }
  if (day==='friday'){
    return 8;
  }
  if (day==='saturday'){
    return 8;
  }
  if (day==='sunday'){
    return 8;
  }
}
console.log(getSleepHours('monday'));

function getActualSleepHours(){
 const sumOfSleep=getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
 return sumOfSleep
}
console.log(getActualSleepHours())

function getIdealSleepHours(){
  let idealHours=7
  return idealHours*7
}
console.log(getIdealSleepHours())

function calculateSleepDebt(){
  let actualSleepHours=getActualSleepHours();
  let idealSleepHours=getIdealSleepHours();
  let sleepDebt=idealSleepHours-actualSleepHours;
  if (actualSleepHours===idealSleepHours){
    console.log(`The user got the right amount of sleep and has ${sleepDebt} hours sleep debt`)
  }
  if (actualSleepHours > idealSleepHours){
    console.log(`The user got more sleep than needed and has ${sleepDebt} hours sleep debt`)
  }
  if (actualSleepHours < idealSleepHours){
    console.log(`The user got the right amount of sleep and has ${sleepDebt} hours sleep debt`)
  }
}
calculateSleepDebt();