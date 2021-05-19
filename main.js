//Select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement ('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}