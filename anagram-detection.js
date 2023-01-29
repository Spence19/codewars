/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/
let isAnagram = function(test, original) {
    let a = test.toLowerCase().split('').sort().join('')
    let b = original.toLowerCase().split('').sort().join('')
    return a == b
}