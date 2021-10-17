// if/else statements

const firstName = "Recep";
const age = 21;
const isStudent = true;
const school = "university";

if (firstName === "Sena") {
  console.log("Merhaba Sena");
}

if (age === 19) {
  console.log("yaşınız 19");
}

if (age >= 18) {
  if (school == "university" || school == "high school") {
    console.log("ehliyet alabilirsiniz");
  } else {
    console.log("eğitim durumunuz yetersiz");
  }
} else {
  console.log("ehliyet alamazsınız");
}

if (age > 0 && age < 12) {
  console.log(`${firstName} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${firstName} is a teenager`);
} else {
  console.log(`${firstName} is an adult`);
}

//undefined
let id = 190201027;
if (typeof id !== "undefined") {
  console.log("id: " + id);
} else {
  console.log("no id");
}
