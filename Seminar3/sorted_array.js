// scrieți o funcție care primește un array de obiecte și un string
//și returnează array-ul sortat după cheia specificată prin string

const sortArray = (array, key) => {
  return array.sort((array, b) => (array[key] > b[key] ? 1 : -1));
};

const movies = [
  {
    title: "The Hobbit",
    year: 2012
  },

  {
    title: "The Lord of the Rings",
    year: 2001
  },

  {
    title: "The DaVinci Code",
    year: 2006
  },

  {
    title: "Pirates of the Caribbean",
    year: 2003
  },

  {
    title: "The Gladiator",
    year: 2001
  }
];

const result = sortArray(movies, "year");
console.log("result: ", result);
