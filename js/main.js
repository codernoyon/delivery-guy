var menuBar = document.querySelector('.menubar');
var navLinks = document.querySelector('.nav_links');

navLinks.style.top = "-450px";

menuBar.onclick = function(){
    if (navLinks.style.top == "-450px"){
        navLinks.style.top = "65px";
    }
    else{
        navLinks.style.top = "-450px";
    }
}