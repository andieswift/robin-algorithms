function isJackpot(arr) {
  const char = arr[0];
  const compareArr = arr.filter(x => x === char);
  return arr.length === compareArr.length
}
