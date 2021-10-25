//implementați un tip obiectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată.
//Constructorul primește valoarea inițială a secvenței.
//Singura metodă este 'next' care calculează următoarea valoare din șir.
class Stream {
  #value;
  #values = [];
  constructor(value) {
    this.#value = value;
  }

  get next() {
    if (this.#value % 2 === 0) {
      this.#values.push(this.#value);
      this.#value = this.#value + 2;
    }
    return this.#values;
  }
}

const stream = new Stream(4);
for (let i = 0; i < 3; i++) {
  console.log(`Value ${i} = ${stream.next[i]}`);
}

console.log(Stream.count);
