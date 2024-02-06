/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const vowelsCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };
  str.toLowerCase().split('').forEach(char => {
    switch (char){
      case 'a':
        vowelsCount["a"]+=1;
        break;
      case 'e':
        vowelsCount["e"]+=1;
        break;
      case 'i':
        vowelsCount["i"]+=1;
        break;
      case 'o':
        vowelsCount["o"]+=1;
        break;
      case 'u':
        vowelsCount["u"]+=1;
    }
  });
  return vowelsCount;
}

module.exports = countVowels;
