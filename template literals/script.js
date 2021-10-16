// Template  Literals

const fullName = "Recep Kaya";
const city = "Kocaeli";
const yearOfBirth = 2000;

let val;
// 1
val =
  "my name is " +
  fullName +
  " I'm " +
  (2018 - yearOfBirth) +
  " years old " +
  " and I live in " +
  city;

// Aşağıdaki durumun 1 . durumdan farkı : { ? } kullanarak soru sorma işlemi yapılabilir.
val = `my name is ${fullName} I'm ${
  2018 - yearOfBirth >= 18 ? "over 20" : "under 20"
} and I live in ${city}`;

console.log(val);
