/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort());
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AB966AO";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Fiat",
  model: "newModel",
  color: "red",
  trims: ["allure", "st"],
});
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims);
  console.log(justTrims);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

// let k=0
// while(k<13){
//   console.log(numericArray[k])
// k++
// }
//2 modi
let k = 0;
while (numericArray[k] !== 32) {
  console.log(numericArray[k]);
  k++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charactersArray2 = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersArray2.push(1);
      break;
    case "b":
      charactersArray2.push(2);
      break;
    case "c":
      charactersArray2.push(3);
      break;
    case "d":
      charactersArray2.push(4);
      break;
    case "e":
      charactersArray2.push(5);
      break;
    case "f":
      charactersArray2.push(6);
      break;
    case "g":
      charactersArray2.push(7);
      break;
    case "h":
      charactersArray2.push(8);
      break;
    case "i":
      charactersArray2.push(9);
      break;
    case "l":
      charactersArray2.push(10);
      break;
    case "m":
      charactersArray2.push(11);
      break;
    case "n":
      charactersArray2.push(12);
      break;
    case "o":
      charactersArray2.push(13);
      break;
    case "p":
      charactersArray2.push(14);
      break;
    case "q":
      charactersArray2.push(15);
      break;
    case "r":
      charactersArray2.push(16);
      break;
    case "s":
      charactersArray2.push(17);
      break;
    case "t":
      charactersArray2.push(18);
      break;
    case "u":
      charactersArray2.push(19);
      break;
    case "v":
      charactersArray2.push(20);
      break;
    case "z":
      charactersArray2.push(21);
      break;
  }
}
console.log(charactersArray2)
//EXTRA IN IF ELSE:

const charactersArray3 = [];

for (let i = 0; i < charactersArray.length; i++) {
  if (charactersArray[i] === "a") {
    charactersArray2.push(1);
  } else if (charactersArray[i] === "b") {
    charactersArray3.push(2);
  } else if (charactersArray[i] === "c") {
    charactersArray3.push(3);
  } else if (charactersArray[i] === "d") {
    charactersArray3.push(4);
  } else if (charactersArray[i] === "e") {
    charactersArray3.push(5);
  } else if (charactersArray[i] === "f") {
    charactersArray3.push(6);
  } else if (charactersArray[i] === "g") {
    charactersArray3.push(7);
  } else if (charactersArray[i] === "h") {
    charactersArray3.push(8);
  } else if (charactersArray[i] === "i") {
    charactersArray3.push(9);
  } else if (charactersArray[i] === "l") {
    charactersArray3.push(10);
  } else if (charactersArray[i] === "m") {
    charactersArray3.push(11);
  } else if (charactersArray[i] === "n") {
    charactersArray3.push(12);
  } else if (charactersArray[i] === "o") {
    charactersArray3.push(13);
  } else if (charactersArray[i] === "p") {
    charactersArray3.push(14);
  } else if (charactersArray[i] === "q") {
    charactersArray3.push(15);
  } else if (charactersArray[i] === "r") {
    charactersArray3.push(16);
  } else if (charactersArray[i] === "s") {
    charactersArray3.push(17);
  } else if (charactersArray[i] === "t") {
    charactersArray3.push(18);
  } else if (charactersArray[i] === "u") {
    charactersArray3.push(19);
  } else if (charactersArray[i] === "v") {
    charactersArray3.push(20);
  } else if (charactersArray[i] === "z") {
    charactersArray3.push(21);
  }
}
console.log(charactersArray3);
