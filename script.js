
function background() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(105deg,  #393232 20%, #393232 52.9%, #ffee58  53%, #ffee58)";
    document.getElementById('header-bottom').style.display = 'none';
    }

function back() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(to bottom, #0d1021, #BA265D  77.8%, #222 78%)";
    document.getElementById('header-bottom').style.display = 'block';
    fadeOut();
    fadeOutPort();
    fadeOutForm();
}


function porton() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(-175deg, #333 , #222 61%, #ffee58  61.2%)";
    document.getElementById('header-bottom').style.display = 'none';
    }


function contacton() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(105deg, #ffee58 5%, #ffee58 15%, #ffee58 70.2%, #ffebee 70.3%)";
    document.getElementById('header-bottom').style.display = 'none';   
    }


function fadeIn() {
    var x = document.getElementById('ab-page');
    x.style.width = '75vw';
    x.style.height = '80vh';
    x.style.zIndex = '20';
    x.style.opacity = '1';
    x.style.visibility = 'visible';
    var y = document.getElementById('test');
    y.style.width = '75vw';
    y.style.zIndex = '3';

     var h = document.getElementById('first-heading');
    h.style.display = 'none';
}

function fadeOut() {
    var x = document.getElementById('ab-page');
    x.style.width = '22vw';
    x.style.zIndex = '-55';
    x.style.opacity = '0';
    
    var y = document.getElementById('test');
    y.style.width = '22vw';
    y.style.zIndex = '2';
    
    var h = document.getElementById('first-heading');
    h.style.display = 'block';
}
/*
function myFunction(z) {
    if (z.matches) { // If media query matches
        var x = document.getElementById('ab-page');
        x.style.width = '90vw';
        x.style.height = '80vh';
        x.style.zIndex = '20';
        x.style.opacity = '1';
        x.style.visibility = 'visible';
        var y = document.getElementById('test');
        y.style.width = '90vw';
        y.style.zIndex = '3';

         var h = document.getElementById('first-heading');
        h.style.display = 'none';
    } 
}

var z = window.matchMedia("(max-width: 1200px)");
//myFunction(z); // Call listener function at run time
//z.addListener(myFunction); 
z.addListener(myFunction); */

function fadeInPort() {

   
        var x = document.getElementById('port-container');
        x.style.width = '75.2vw';
        x.style.left = '0';
        x.style.zIndex = '3';
        x.style.overflow = 'hidden';        
        
        var y = document.getElementById('main-section');
        y.style.width = '75.2vw';
        y.style.left = '0vw';
        y.style.zIndex = '20';
        y.style.opacity = '1';
        y.style.visibility = 'visible';
        y.style.overflow = 'hidden';
    
        var h = document.getElementById('second-heading');
        h.style.display = 'none';
}
    


function fadeOutPort() {
    var x = document.getElementById('port-container');
    x.style.width = '22vw';
    x.style.left = '25vw';
    x.style.zIndex = '2';
    x.style.overflow = 'hidden';

    var y = document.getElementById('main-section');
    y.style.zIndex = '-55';
    y.style.opacity = '0';
    y.style.visibility = 'hidden';
     var h = document.getElementById('second-heading');
     h.style.display = 'block';
}

function fadeInForm() {
        var x = document.getElementById('contact-form');
        x.style.width = '75vw';
        x.style.left = '0';
        x.style.zIndex = '3';
        x.style.overflow = 'hidden';    
        var y = document.getElementById('form-page');
        y.style.width = '75vw';
        y.style.left = '0';
        y.style.zIndex = '40';
        y.style.opacity = '1';
        y.style.visibility = 'visible';
        y.style.overflow = 'hidden';
    
        var h = document.getElementById('third-heading');
        h.style.display = 'none';
        document.getElementById('home').style.filter = 'none';

}
    


function fadeOutForm() {
    var x = document.getElementById('contact-form');
    x.style.width = '22vw';
    x.style.left = '50vw';
    x.style.zIndex = '2';
    x.style.overflow = 'hidden';
    var y = document.getElementById('form-page');
    y.style.zIndex = '-55';
    y.style.opacity = '0';
    y.style.visibility = 'hidden';
    var h = document.getElementById('third-heading');
    h.style.display = 'block';
    document.getElementById('home').style.filter = 'drop-shadow(-3mm -3mm 1mm rgba(0, 0, 0, 0.38))';
}













