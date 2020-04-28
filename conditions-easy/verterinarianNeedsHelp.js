/*
QUESTION:

Your friend is a veterinarian and wants to know how many pet slippers he needs to knit before Christmas.
Your friend looks after three different species: dogs, cats, and chickens. He asks, very politely, if you can write him a function
that calculates how many slippers he needs to make and provides you with the subtotal of each species of animal.
Please write a function for your friend that returns the number of slippers that he will be knitting!
*/

function howManySlippers (dogs, cats, chickens) {
  return 4*(dogs + cats) + 2*chickens;
}
