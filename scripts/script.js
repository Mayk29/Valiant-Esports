// Ronquillo, Michael Arnold
// script.js
// October 30, 2023 - November 2023

// Hamburger Menu Function
function myFunction() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("valiant-logo");
    if (menu.style.display === "block"&& logo.style.display === "none") {
      menu.style.display = "none";
      logo.style.display= "block";
    } else {
      menu.style.display = "block";
      logo.style.display= "none";
    }
  }



// Function to display valiant motto
function motto(){
    var motto = document.getElementById("truly");
    motto.firstChild.nodeValue = "Truly Valiant";
    motto.style.color="#fcc200";
    motto.style.fontSize = "1em";
}

// Function to display valiant / HAU address
function address(){
  var address = document.getElementById("add");
  address.firstChild.nodeValue = "#1 Holy Angel Avenue, Sto. Rosario, Angeles City, Philippines 2009";
  address.style.color="#fcc200";
  address.style.fontSize = "1em";
}