window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

function myFunction() {
    if ( window.pageYOffset > 80 ) {
        logo.style.backgroundImage = "url('./images/starnesLogo_dark.svg')";
        menu.style.backgroundImage = "url('./images/menuIcon_dark.svg')";
    }
    else {
        logo.style.backgroundImage = "url('./images/starnesLogo.svg')";
        menu.style.backgroundImage = "url('./images/menuIcon.svg')";
    }
}