//functii variadice
// function addToArray() {
//   let args = arguments;
//   let array = args[0]; //array-ul in care sa concateneze
//   for (var i = 1; i < args.length; i++) {
//     //param. de adaugat in array
//     array.push(args[i]);
//   }
//   return array;
// }

//Metoda II
function addToArray(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));
