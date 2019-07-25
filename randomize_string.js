function randomize(str) {
  let arr = str.split("");
  let res = ""
  while (arr.length) {
    let newChar = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1);
    console.log(newChar);
    res += newChar
  }
  return res;
}

console.log(randomize("food"));