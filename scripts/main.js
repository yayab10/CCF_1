document.addEventListener('DOMContentLoaded', function() {
    // Sélection du paragraphe
    const welcomeElement = document.getElementById('principalTitle');
    // Contenu du paragraphe
    const welcomeText = welcomeElement.innerHTML;
    // Réinitialisation du contenu
    welcomeElement.innerHTML = '';
    
    // Variable pour garder le délai
    let index = 0;
  
    // Fonction pour ajouter une lettre à la fois
    function addLetter() {
      if (index < welcomeText.length) {
        welcomeElement.innerHTML += welcomeText.charAt(index);
        index++;
        setTimeout(addLetter, 250); // Délai de 100 millisecondes entre chaque lettre
      }
    }
  
    // Démarrer l'effet d'écriture
    addLetter();
  });

  var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// images controls
function currentSlide(n) {
  clearInterval(autoSlideInterval); // Arrête le défilement automatique lorsqu'un bouton est cliqué
  SlideShow(slidePosition = n);
}

function autoSlide() {
  plusSlides(1);
}

// Démarrez le défilement automatique toutes les X millisecondes (par exemple, toutes les 3 secondes ici)
var autoSlideInterval = setInterval(autoSlide, 3000);