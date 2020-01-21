//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}

window.onload = function () {
document.getElementById("splash").style.opacity = 1;
var photoSectionID = document.getElementById("photoSection");
var photSectDescID = document.getElementById("photoSectionDesc"); 
window.scrollTo(0, 0);
    
setTimeout(function() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("header").style.opacity = 1;
}, 2500);
    
}

var arrow = document.getElementById("arrow");
var footer = document.getElementById("footer");


window.onscroll = function() {myFunction()};


function myFunction() {
    if ( window.pageYOffset > 170 ) {
        arrow.style.opacity = 0;
        footer.style.opacity = 1;
    }
    else {
        arrow.style.opacity = 1;  
        footer.style.opacity = 0;
    }
    
}