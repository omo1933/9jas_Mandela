let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove the last string of the array
secretMessage.pop();
secretMessage.push('to','secretMessage');
secretMessage[7]='right';
secretMessage.shift();
secretMessage.unshift('Programming')
secretMessage.splice(7, 4, 'know');
console.log(secretMessage.join(' '))