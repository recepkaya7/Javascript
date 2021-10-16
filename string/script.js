// Strings

const firstName = "Recep";
const lastName = "Kaya";
let hobbies = "müzik spor kitap yazılım";
const age = 20;

let val;

// string concatenation

val = firstName + " " + lastName;
val = "Recep";
val += " Kaya";

val =
  "Benim adım " +
  firstName +
  " " +
  lastName +
  " ve yaşım " +
  age +
  " izmit'te yaşıyorum.";
console.log(val);
//string concat-> birleştirme işlemi
val = firstName.concat(" ", lastName);
console.log(val);
// string uppercase - lowercase
val = val.toUpperCase();
console.log(val);
val = val.toLowerCase();
console.log(val);
// string replace-> string ifadeyi değiştirir.
val = "  " + val.replace("kaya", "kayaa") + "--" + "     ";

// trim-> her 2 taraftaki boşlukarı kaldırır
val = val.trim();
console.log(val);
// substring - slice -> string parçalama
// val = val.substring(3,8);

// slice
// val = val.slice(6);

//indexOf -> aranan karakterin index bilgisini döndürür.
//val = val.indexOf('x');

//val = val[1];

//string length -> string uzunluğunu döndürür.
//val = val.length;

val = hobbies.split(" ");

console.log(val);
console.log(typeof val);
