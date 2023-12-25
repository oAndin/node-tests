const fs = require('fs');
const date = new Date();


const textIn = fs.readFileSync('./TXT/something_in_the_way.txt', 'utf-8');
console.log(textIn);
const textOut = `This is just a test about: ${textIn} \nCreate on ${date}`
fs.writeFileSync('./TXT/test_output_.txt', textOut);
console.log('file written');
