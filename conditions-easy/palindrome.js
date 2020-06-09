/*Sheltered at home, you are so bored out of your mind that you start thinking about palindromes.
  A palindrome, in our case, is a number that reads the same in reverse as it reads normally.
  Robin challenges you to write a function that returns the closest palindrome to any number of your choice.
  If your number is exactly in between two palindromes, return the smaller number.
  If the number you chose IS a palindrome, return itself. Have fun! */


function nearestPalindrome(number) {

  if(isPalindrome(number)) return number;
  const upper = getUpperPalindrome(number);
  const lower = getLowerPalindrome(number);
  const upperDifference = upper - number;
  const lowerDifference = number - lower;

  if(upperDifference < lowerDifference) return upper;
  return lower;

  function isPalindrome (number) {
    const numArr = number.toString().split('');
    const halfway = parseInt(numArr.length/2)
    const firstHalf = numArr.splice(0, halfway);
    const secondHalf = numArr.length % 2 ? numArr.splice(halfway-1, numArr.length) : numArr.splice(halfway-2, numArr.length);
    secondHalf.reverse();

    if(firstHalf.join('') === secondHalf.join('')) return true;
    return false;
  }

  function getLowerPalindrome (number) {
    for(let i = number; i > 0 ; i--){
      if(isPalindrome(i)) return i
    }
  }

  function getUpperPalindrome (number) {
    for(let i = number; ; i++){
      if(isPalindrome(i)) return i;
    }
  }

}
