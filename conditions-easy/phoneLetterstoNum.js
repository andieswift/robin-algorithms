console.log(formatPhone("888-YOU-RANG"));

function formatPhone(phoneAsLetters) {
  const phoneNumber = []
  const numLetterMap = {
    A: 2, B: 2, C: 2, D: 3, E: 3, F: 3, G: 4, H: 4, I: 4, J: 5, K: 5, L: 5, M: 6, N: 6, O: 6, P: 7, Q: 7, R: 7, S: 7, T: 8, U: 8, V: 8, W: 9, X: 9, Y: 9, Z: 9
  }
  for (let i = 0; i < phoneAsLetters.length; i++) {
    if (/^[a-zA-Z]+$/.test(phoneAsLetters[i])) {
      phoneNumber.push(numLetterMap[phoneAsLetters[i]])
    } else { phoneNumber.push(phoneAsLetters[i]) }
  }

  return phoneNumber.join('')
}
