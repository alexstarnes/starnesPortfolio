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
var topNavBar = document.getElementById("topNavBar");


window.onscroll = function() {myFunction()};


function myFunction() {
    if ( window.pageYOffset > 170 ) {
        arrow.style.opacity = 0;
        footer.style.opacity = 1;
        topNavBar.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        topNavBar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.25)";
    }
    else {
        arrow.style.opacity = 1;  
        footer.style.opacity = 0;
        topNavBar.style.backgroundColor = "transparent";
        topNavBar.style.boxShadow = "none";
    }
    
}


/*
* 
* Event delegation is a bit cleaner imho 
* and requires less horsepower if you've got a lot of links to work with. =) 
* 
*/

//document.addEventListener('click', function(e) {
//  
//  
//  // If it isn't an anchor element, don't even bother...
//  if (e.target.tagName !== 'A') return;
//  
//  if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
//    
// /** 
// * If everything checks out, 
// * pass the click event and the event target
// * on through to the scrollAnchors function.
// */ 
//			scrollAnchors(e, e.target);
//    
//  }
//  
//  
///** 
//*
//* If you want to target links that have the scroll class, just uncomment the code below (after 
//* commenting out the code above, of course! =D ): 
//*
//*/
//  
////   if (e.target.tagName !== 'A') return; 
//  
////   if (e.target.className.contains('.scroll')) {
//    
////      scrollAnchors(e, e.target);
//    
////   }
//  
//});
//
//			
//			function scrollAnchors(e, respond = null) {
//				// const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//        
//        function distanceToTop(el) { 
//          return Math.floor(el.getBoundingClientRect().top); 
//        }
//        
//				e.preventDefault();
//				var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//			var targetAnchor = document.querySelector(targetID);
//				if (!targetAnchor) return;
//				var originalTop = distanceToTop(targetAnchor);
//				window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//				var checkIfDone = setInterval(function() {
//					var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//					if (distanceToTop(targetAnchor) === 0 || atBottom) {
//						targetAnchor.tabIndex = '-1';
//						targetAnchor.focus();
//            
//           // Let's make sure the History API even exists first..
//            if ('history' in window) {
//              
//						    window.history.pushState('', '', targetID);
//              
//              } else {
//                // Do it the old-fashioned way!
//                window.location = targetID;
//                
//              }
//           
//						clearInterval(checkIfDone);
//					}
//				}, 100);
//			}