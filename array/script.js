// Arrays

let names = ["ali", "aslı", "merve", "kerem"];
let years = [2017, 1970, 1990, 1998];
let mix = ["recep", "kaya", 1983, null, undefined, ["müzik", "kitap"]];

// diziden eleman alma
console.log(names[0]);
// console.log(names[3])

//diziye eleman ekleme
names[names.length] = "emel";
console.log(names + "-");

years.push(1986);
console.log(years);
years.unshift(1986); // dizinin başına 1986 ekler
years.unshift(2000);

// eleman silme
// years.pop();
// years.shift();

// elemanın index bilgisi
// let index = names.indexOf('ada');
// console.log(' index : '+index);

// // reverse
console.log(names);
names.reverse(); // diziyi ters çevirir.
console.log(names);

// // sort
/*
sıralama yapar.(kelime uzunlğu ya da sayı büyüklüğüne göre) 
*/
years.sort();
console.log("sort: " + years);
// //concat
let val = years.concat(names);
console.log("concat: " + val);

// splice (eleman eklemek-silmek için kullanılır.)
console.log("splice öncesi: " + names);
names.splice(0, 1);
console.log("splice sonrası: " + names);
function over18(year) {
  let age = 2021 - year;
  return age >= 18;
}

// find
/*  years içierisindeki sayıları teker teker fonksiyona gönderir ve şartı sağlayanı geri döndürür.
 */
val = years.find(over18);
console.log("find: " + val);
// filter
/*years içierisindeki sayıları teker teker fonksiyona gönderir ve şartı sağlayanları geri döndürür.
 */
val = years.filter(over18);

console.log("filter : " + val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
