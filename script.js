// JSON objektai skirti duomenų perdavimui

//Įprastas objektas
const obj = {
  name: "Jhon",
  age: 28,
  nextAge: 28 + 1,
  children: ["child 1", "child 2"],
  address: {
    street: "Vilniaus st.",
    city: "Vilnius",
    country: "Lithuania",
  },
  married: true,
  getAddress() {
    return `Address is: ${this.address.street} ${this.address.city} ${this.address.country}`;
  },
  test1: undefined,
  //null rašom kai patys žinom, kad nėra reikšmės, bet gal kažkada uždėsim reikšmę
  test2: null,
};

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.children[0]);
//

//objektas paverčiamas į JSON objektą

const json = JSON.stringify(obj);
console.log(json);

//JSON to object
const convertedJson = JSON.parse(json);
console.log(convertedJson);

//nei funkcijų, nei datos, nei undefined į JSON objektą nepriimą.
//Priima string, number, onject, array, boolean, null
//JSON online validator - parodo kas blogai

//JSON objekte negalim daryti matematinių veiksmų, turim visur n audoti dvigubas kabutes " ",po paskutinio property nereikia dėti kablelio.

console.log("fetch metodas");
//fetch metodas gauti duomenis. Tai asinchroninė funkcija. Duomenys nėra gaunami iš karto. Siunčiam užklausą ir jis mums grąžina pažadą.
// fetch("obj.json").then(function() {})
// fetch("obj.json").then(() => {});
// fetch("obj.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("obj.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.name);
    console.log(data.age);
  });
