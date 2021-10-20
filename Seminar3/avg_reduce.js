//Dat fiind un array de numere scrieți o funcție pentru a calcula
//media lor folosind reduce

const getAverage = (array) => array.reduce((a, b) => a + b) / array.length;

const numbers = [8, 6, 5, 9, 10, 10];

var result = getAverage(numbers);
console.log("average: ", result);
