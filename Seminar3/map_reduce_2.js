//implementați o funcție care primește ca parametrii un array de numere și un număr
//și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru
const getSum = (elements, nr) =>
  elements
    .filter((element) => element % nr === 0)
    .map((element) => element)
    .reduce((prev, current) => prev + current, 0);

const elements = [1, 2, 3, 4, 5, 6];
const result = getSum(elements, 3);
console.log("result: ", result);
