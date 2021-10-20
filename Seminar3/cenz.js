//implementați cenzurarea unui text printr-o funcție.
//Funcția primește un șir de caractere și un dicționar sub forma unui array.
// De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"]
//funcția va produce "javascript e**e minunat".

const dictionary = ["este"];

const sampleText = `javascript este minunat`;

const censor = (text, dictionary) => {
  const words = text.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (dictionary.indexOf(words[i]) !== -1) {
      var x = words[i].split("");
      for (var j = 1; j < x.length - 1; j++) x[j] = "*";
      x = x.join("");
      text = text.replace(words[i], x);
    }
  }
  return text;
};

console.log(censor(sampleText, dictionary));
