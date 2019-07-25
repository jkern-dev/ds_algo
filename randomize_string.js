function randomize(str) {
  let arr = str.split("");
  let res = ""
  while (arr.length) {
    let newChar = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1);
    res += newChar
  }
  console.log(str);
  if (res === str) {
    randomize(str);
  } else {
    return res;
  }
}

console.log(randomize("foodie"));