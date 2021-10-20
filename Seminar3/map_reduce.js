const getTotalArea = (squareDimensions) =>
  squareDimensions
    .map((side) => side * side) //returneaza o lista cu patratul fiecarui nr din prima lista
    .reduce((prev, current) => prev + current, 0);

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);
