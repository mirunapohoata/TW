//Numarul de aparitii ale unui caracter intr-un text
//Metoda I
// function occurences(text, character) {
//   let count = 0;
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === character) {
//       count++;
//     }
//   }
//   return count;
// }
//console.log(occurences("sample text", "e"));

//Metoda II
// function occurences(text, character) {
//   return text.split(character).length - 1;
// }

//Metoda III => Lambda
let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences("sample text", "e"));
