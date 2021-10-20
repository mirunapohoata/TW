const concatenateStrings = (arrayOfString) => {
  let result = "";

  for (let string of arrayOfString) {
    result += string;
  }

  return result;
};

console.log(concatenateStrings(["abc", "bcd", "edf"]));
