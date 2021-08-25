let userName=''
userName==='Mandela'? console.log(`Hello,${userName}`):console.log('Hello!')
let userQuestion=`What is my ${userName}`
console.log(userQuestion)
let randomNumber=(Math.floor(Math.random() * 8))
let eightBall=''
switch (eightBall===randomNumber){
  case randomNumber===0:
  console.log('It is certain');
  break;
  case randomNumber===0:
  console.log('It is decidedly so');
  break;
  case randomNumber===1:
  console.log('Reply hazy try again');
  break;
  case randomNumber===2:
  console.log('Cannot predict now');
  break;
  case randomNumber===3:
  console.log('Do not count on it');
  break;
  case randomNumber===4:
  console.log('My sources say no');
  break;
  case randomNumber===5:
  console.log('Outlook not so good');
  break;
  case randomNumber===6:
  console.log('Signs point to yes');
  break;
}