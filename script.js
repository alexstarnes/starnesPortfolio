window.onload = function () {
    var i;
    var photoContent = document.getElementById("photoContent");
    for (i=1; i< 5; i++) {

        var imageString = "./static/photo" + i + ".JPG";

        var newDiv = document.createElement("IMG");

        newDiv.classList.add("photo");

        newDiv.src = imageString;

        photoContent.appendChild(newDiv);

    }
document.getElementById("splash").style.opacity = 1;
var firstNameID = document.getElementById("firstName");
var lastNameID = document.getElementById("lastName");
window.scrollTo(0, 0);
    
setTimeout(function() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("header").style.opacity = 1;
}, 2500);
    
setTimeout(function() {
  
  lastNameID.style.marginLeft = "10px";
  firstNameID.style.opacity = 1;
    
}, 4000);    
   
    
}

var arrow = document.getElementById("arrow");
var social = document.getElementById("social");
var topNavBar = document.getElementById("topNavBar");
var hero = document.getElementById("hero");
var popupBackground = document.getElementById("popupBackground");
var popupOverlay = document.getElementById("popupOverlay");
var popupIframe = document.getElementById("popupIframe");


window.onscroll = function() {myFunction()};


function myFunction() {
    if ( window.pageYOffset > 400 ) {
        hero.style.opacity = 0.4;
    }
    else {
        hero.style.opacity =  1 - ((window.pageYOffset/400)*0.6) ;
        
    }
    
    if ( window.pageYOffset > 170 ) {
        arrow.style.opacity = 0;
        social.style.opacity = 1;
        topNavBar.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        topNavBar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.25)";
    }
    else {
        arrow.style.opacity = 1;  
        social.style.opacity = 0;
        topNavBar.style.backgroundColor = "transparent";
        topNavBar.style.boxShadow = "none";
    }
    
}

var bodyElement = document.body;

function openFilePopup() {
    
   var url = arguments[0];
//    alert(url);
    
var windowWidth = window.innerWidth;
    
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        window.open(url, '_blank');
    }
    else if (windowWidth < 760) {
        popupBackground.style.opacity = '1';
        popupBackground.style.zIndex = '90';
        popupOverlay.style.top = '0';
        bodyElement.style.overflow = 'hidden';
        popupIframe.src = url;
        }
    else {
        
        popupBackground.style.opacity = '1';
        popupBackground.style.zIndex = '90';
        popupOverlay.style.top = '10vh';
        bodyElement.style.overflow = 'hidden';
        popupIframe.src = url;
        
    }
          
}

function closeFilePopup() {
        popupBackground.style.opacity = '0';
        popupBackground.style.zIndex = '-20';
        popupOverlay.style.top = '105vh';
        bodyElement.style.overflow = 'auto';
        popupIframe.src = "";
}