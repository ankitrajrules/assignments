/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Check if lengths of both strings are same
    if (str1.length !== str2.length) return false; // If lengths aren't equal
    else {
        if (str1.split('').sort().join('') === str2.split('').sort().join('')){
            return true; // Return True if sorted string matches
        }
        else
            return false;
    }
}

module.exports = isAnagram;
