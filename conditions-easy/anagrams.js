/*Anagrams are words that contain the exact same letters in the same quantity. Robin challenges you to write a function that
accepts two words and returns true if they are anagrams.
BONUS: write the function so that it can receive any number of words
and returns true if all of them are anagrams of each other. */

console.log(areTheyAnagrams('pam', 'map', 'mmm', 'map'));
console.log(areTheyAnagrams('aaa', 'map'));
console.log(areTheyAnagrams('pam', 'aaa'));

function areTheyAnagrams(){
  let words = [...arguments]
  for(let w = 0; w < words.length-1; w++){
    const temp = words[w+1]
    for (let i = 0; i < words[w].length; i++) {
      if (words[w+1].includes(words[w].charAt(i))) {
        let j = words[w+1].indexOf(words[w].charAt(i));
        words[w+1] = words[w+1].slice(0, j) + words[w+1].slice(j + 1, words[w+1].length)
      }
    }
    if (words[w+1].length !== 0) return false;
    words[w+1] = temp;
  }
  return true;
}
