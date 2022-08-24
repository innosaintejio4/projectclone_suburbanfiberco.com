
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navMenu") {
    x.className += " responsive";
  } else {
    x.className = "navMenu";
  }
}