function isUnique(str) {
  let arr = str.split("");
  let chars = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in chars) {
      return false;
    } else {
      chars[arr[i]] = 1;
    }
  }
  return true;
};

console.log(isUnique("abc")); // return True
console.log(isUnique("abcb")); // return False
console.log(isUnique("abcdec")); // return False
