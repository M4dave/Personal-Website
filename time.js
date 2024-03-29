var today = new Date(); //create a new Date object
var hourNow = today.getHours(); // find the current hour
var greeting;

//Display the appropriate greeting based on the current time

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.write("<h6>" + greeting + "</h6>");