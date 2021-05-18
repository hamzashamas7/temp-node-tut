//FS Module
const {readFileSync,writeFileSync} =require('fs')

const first=readFileSync('./content/first.txt','utf8');
const secnd=readFileSync('./content/second.txt','utf8')

console.log(first);
console.log(secnd);

writeFileSync('./content/result-sync.txt','here is result: '+first+"ok");
