//funcție care primește ca parametrii două array-uri de aceeași lungime
//și returnează un array cu elementele din cele două surse intercalate.
function concat(a, b) {
  const result = new Array();
  for (var i = 0; i < a.length; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }
  return result;
}

let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "d", "e"];

console.log(concat(a, b));
