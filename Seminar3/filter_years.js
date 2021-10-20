//folosiți metodele map și filter pentru a procesa un array de numere
// reprezentând ani de naștere, obținând vârstele peste 18 ani

const years = [2019, 2005, 1997, 2021, 1995, 1992, 2010, 1994, 2013, 1993];

const minAge = 18;
const currentYear = new Date().getFullYear();

const filterAges = (years, minAge, currentYear) => {
  const years2 = years.filter((year) => currentYear - year >= minAge);

  const ages = new Map();
  for (var i = 0; i < years2.length; i++) {
    ages.set(years2[i], currentYear - years2[i]);
  }
  return ages;
};

console.log(filterAges(years, minAge, currentYear));
