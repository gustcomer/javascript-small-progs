// split: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
// split.reverse: [ 'd', 'l', 'r', 'o', 'W', ' ', 'o', 'l', 'l', 'e', 'H' ]
// split.reverse.join: dlroW olleH

const reversedString = str => str.split('').reverse().join('');

reversedString("Hello World"); // dlroW olleH