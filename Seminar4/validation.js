const orderCoffee = (type) => {
  const types = {
    SPECIAL: "SPECIAL",
    REGULAR: "REGULAR"
  };

  if (Object.values(types).indexOf(type) === -1) {
    throw new Error("coffee error!!");
  } else {
    console.log(`preparing ${type} coffee...`);
  }
};

try {
  orderCoffee("REGULAR");
  orderCoffee("SWEET_COFFEE_NO_SUGAR_NO_CAFFEINE");
} catch (err) {
  console.warn(err);
}

//implementați funcția increaseSalary care primește ca parametrii
//un array de salarii și un număr reprezentând procentul cu care se vor
//mări (ex 10). Funcția aruncă excepții dacă primul parametru
//nu este un array sau al doilea parametru nu este un număr.

var salaries = [3500, 5000, 4000, 6700];
const procent = 10;

const increaseSalary = (salaries, proc) => {
  if (Array.isArray(salaries) == false) {
    throw new Error("array error!!!");
  } else if (isNaN(proc)) {
    throw new Error("number error!!!");
  } else {
    salaries = salaries.map((salary) => salary + (proc / 100) * salary);
    console.log(salaries);
  }
};

try {
  increaseSalary(salaries, procent);
  //increaseSalary(salaries, "a");
  increaseSalary(1000, 10);
} catch (err) {
  console.warn(err);
}
