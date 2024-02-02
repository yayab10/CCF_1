// ******************************** Effet d'écriture **************************
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

  // ********************************** Slide *************************************
  let slidePosition = 1;
SlideShow(slidePosition);

// controle suivant et précédent
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function SlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let circles = document.getElementsByClassName("dots");
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
  // Arrête le défilement automatique lorsqu'un bouton est cliqué
  clearInterval(autoSlideInterval); 
  SlideShow(slidePosition = n);
}

function autoSlide() {
  plusSlides(1);
}

// Démarrez le défilement automatique
let autoSlideInterval = setInterval(autoSlide, 3000);


// ******************************* Bouttons A PROPOS **********************************
function toggleModal(buttonId, modalId, containerId) {
  let button = document.querySelector(buttonId);
  let modal = document.querySelector(modalId);
  // Utilise le body par défaut si le conteneur n'est pas spécifié
  let container = document.querySelector(containerId || 'body'); 

  button.addEventListener('click', function () {
      modal.style.display = 'block';
      // container.style.opacity = 0.3; // Opacité du conteneur principal
      // Autres modifications nécessaires à l'affichage de la modal
  });

  let closeModal = function () {
      modal.style.display = 'none';
      container.style.opacity = 1; 
  };

  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          closeModal();
      }
  });


  
  let closeButton = modal.querySelector('.close-button');
  if (closeButton) {
      closeButton.addEventListener('click', closeModal);
  }
}

// Utilisation de la fonction
toggleModal('#massage_californien', '#m_c', '#service1');
toggleModal('#massage_suedois', '#m_s', '#service2')
toggleModal('#cupping_therapie', '#c_t', '#service3')
toggleModal('#theraface', '#t_f', '#service4')
toggleModal('#fauteil_massant', '#f_m', '#service5')
toggleModal('#presso_therapie', '#p_t', '#service6')
toggleModal('#cryo_therapie', '#cr_t', '#service7')
toggleModal('#electrode_compex', '#e_c', '#service8')

document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burgerIcon');
  const navList = document.getElementById('navList');

  burgerIcon.addEventListener('click', function () {
      navList.classList.toggle('show');
  });
});



let accueil = document.querySelector('#accueil_display')
let about = document.querySelector('#about_display')
let service = document.querySelector('#services_display')
let price = document.querySelector('#price_display')
let testimonial = document.querySelector('#temoignages_display')
let contact = document.querySelector('#contact_display')


// ******************************* Menu responsive ********************************
  function showResponsiveMenu() {
  let menu = document.getElementById("topnav_responsive_menu");
  let icon = document.getElementById("topnav_hamburger_icon");
  let root = document.getElementById("root");
  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
    root.style.overflowY = "hidden";
  } else {
    menu.className = "";                    
    icon.className = "";
    root.style.overflowY = "";
  }
}
function toggleMenu() {
  let topnav = document.getElementById('topnav');
  topnav.classList.toggle('responsive');
  let icon = document.getElementById('topnav_hamburger_icon');
  icon.classList.toggle('open');
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  let topnav = document.getElementById("topnav");

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topnav.style.position = "fixed";
    topnav.style.top = "0";
    topnav.style.right = "3px"
  } else {
    topnav.style.position = "relative";
    topnav.style.top = "auto";
  }
}


// let massageCalifornien = document.getElementById('massage_californien')
// massageCalifornien.addEventListener('click', function() {
//   window.open('index2.html')
// })