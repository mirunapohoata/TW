// implementați metoda 'times' pe tipul Number,
//astfel încât 3.times(() => {}) să execute funcția de 3 ori

Number.prototype.times = function () {
  let sum = 0;
  for (var i = 1; i <= this.valueOf(); i++) {
    sum = sum + i;
  }
  return sum;
};

const n = 3;
console.log(n.times());
