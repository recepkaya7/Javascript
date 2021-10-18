var result = prompt("who's there ? -Admin ");

if (result == "cancel") {
  console.log("cancelled");
} else if (result == "Admin") {
  var password = prompt("enter your password : -1234");

  if (password == "cancel") {
    console.log("cancelled");
  } else if (password == "1234") {
    console.log("welcome Admin");
  } else {
    console.log("wrong password");
  }
} else {
  console.log("I dont know you");
}
