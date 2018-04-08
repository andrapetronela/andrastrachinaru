/*function interv() {
    var y = setInterval(movingBackground, 5000);
    var a = 160;
    if (a == 90) {
        clearInterval(y);
    } else {
        a--;
       var  b = document.getElementsByClassName('gradient')[0];
        b.style.backgroundImage = `linear-gradient( ${ a } deg, #E9E9E5 15vw, #BFDBA7 15.1vw,  #BFDBA7  37.5vw, #7CD3C8  37.6vw, #7CD3C8  62.5vw, #1F2738   62.6vw)`;

    }
    
   // var c = document.getElementsByClassName('gradient');
    b.classList.add('header');
    
}
*/
/*
function movingBackground() {
  var x = document.getElementById('parent');
    x.style.backgroundImage = "linear-gradient(90deg, #E9E9E5 15vw, #BFDBA7 15.1vw,  #BFDBA7  37.5vw, #7CD3C8  37.6vw, #7CD3C8  62.5vw, #1F2738   62.6vw)";
    x.style.transition=  "all 5s liniar";
   //  x.classList.add('header');
}*/



function background() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(105deg,  #393232 20%, #393232 52.9%, #ED8D8D  53%)";
    document.getElementById('header-bottom').style.display = 'none';
    }

function back() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(to bottom, #182038, #203058, #402048, #683058, #805088)";
    document.getElementById('header-bottom').style.display = 'block';
    fadeOut();
    fadeOutPort();
    fadeOutForm();
}


function porton() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(-175deg, #2c3531 , #116466 61%, #ffcb9a  61.2%)";
    document.getElementById('header-bottom').style.display = 'none';
    }


function contacton() {
    var x = document.getElementById('parent').style.backgroundImage = "linear-gradient(105deg, #0be881 5%, #3ae374 15%, #32ff7e 70.2%, #ffebee 70.3%)";
    document.getElementById('header-bottom').style.display = 'none';

    
    //"linear-gradient(160deg, #393939 11.2%, #FF7F5B 11.3%, #FF7F5B 89.2%, #393939 89.3%)";
   
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
      // x.style.height = '80vh';
    x.style.zIndex = '-55';
    x.style.opacity = '0';
    
    var y = document.getElementById('test');
    y.style.width = '22vw';
    y.style.zIndex = '2';
    
    var h = document.getElementById('first-heading');
    h.style.display = 'block';
}

function fadeInPort() {

   
        var x = document.getElementById('port-container');
        x.style.width = '75.2vw';
        x.style.left = '0';
        x.style.zIndex = '3';
        x.style.overflow = 'hidden';
       // x.style.visibility = 'hidden';
        
        
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
   // y.style.width = '25vw';
  //  y.style.left = '0vw';
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



