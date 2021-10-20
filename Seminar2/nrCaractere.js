function checkCharacters(s1, s2) {
  var i = 0;
  var j = 0;
  var k = 0;

  if (s1.length == s2.length) {
    while (i < s1.length) {
      if (s2.includes(s1[i]) == false) {
        k++;
      }
      i++;
    }
    while (j < s2.length) {
      if (s1.includes(s2[j]) == false) {
        k++;
      }
      j++;
    }
    return k;
  } else return -1;
}

console.log(checkCharacters("abcde", "chjdf"));
