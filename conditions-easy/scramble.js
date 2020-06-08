/* Stuck in quarantine...still...and all alone, you decide to play a game of
Scrabble against YOURSELF - rather, against your shadow.
That pesky shadow of yours is known to be quite the Scrabble ace.
In order to make sure that you have the best chance at winning,
you decide to create a function that receives an array of words.
The function should score the words and return an array of the words (or word) with the highest score. */

//words is an array of strings

console.log(bestScrambleWords(['zat', 'zzz', 'bird']));

function bestScrambleWords(words) {
  let wordMap = {}

  for(let i = 0; i < words.length; i++){
    const word = words[i];
    wordMap[word] = wordCount(word);
  }

  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < words.length; i++){
      const w1 = wordMap[words[i]]
      const w2 = wordMap[words[i+1]]
      if(w2 > w1){
        const temp = words[i];
        words[i] = words[i+1];
        words[i+1] = temp;
        swapped = true
      }
    }
  } while (swapped);

  return words.slice(0,3)
}


function wordCount(w) {
  w = w.toUpperCase();
  const letterMap = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8,
    K: 5, L: 2, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
  }
  let sum = 0;
  w = w.split('')
  for(let i = 0; i< w.length; i++){
    sum += parseInt(letterMap[w[i]])
  }
  return sum;
}
