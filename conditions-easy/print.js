console.log(print(5, 5));

function print(x, y) {
  if (x < 3 || y < 3) {
    return "Error, too small."
  }

  let frame = [];

  for (let i = 0; i < 4; i++) {
    let temp = [];
    let length = i === 0 || i === 3 ? x : y - 2;
    for (let j = 0; j < length; j++) {
      temp.push('#')
    }
    frame.push(temp);
  }

  return frame;
}
