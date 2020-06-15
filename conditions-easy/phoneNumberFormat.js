
function arrToPhoneNumber(arr) {
  const numStr = numStr.join('');
  return `(${numStr.splice(0,3)})${numStr.splice(3,6)}-${numStr.splice(6)}`
}
