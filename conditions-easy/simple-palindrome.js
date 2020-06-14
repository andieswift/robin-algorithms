console.log(palidrome('mom'));

function palidrome (string) {
  string = string.split(' ').join('');
  return string === string.split('').reverse.join('');
}
