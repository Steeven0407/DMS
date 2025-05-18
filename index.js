emailjs.init({
  publicKey: "VJRGRX3dZfHePBnRI",
});

let sendbtn = document.getElementById("submit-email");

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  let fecha = new Date().toLocaleString();
  let nombre = document.getElementById("nombre-email").value;
  let email = document.getElementById("email-email").value;
  let numero = document.getElementById("numero-email").value;
  let mensaje = document.getElementById("mensaje-email").value;

  var params = {
    title: nombre + " " + fecha,
    name: nombre,
    email: email,
    time: fecha,
    numero: numero,
    message: mensaje,
  };

  emailjs.send("service_mwxydft", "template_tpniwev", params).then(
    (response) => {
      console.log("¡ÉXITO!", response.status, response.text);
      alert("Mensaje enviado con éxito 🚀");
      form.reset(); 
    },
    (error) => {
      console.error("ERROR AL ENVIAR...", error);
      form.reset(); 
    }
  );
});


// navbar
const navBar = document.querySelector('.nav-bar');

function showNav() {
  navBar.classList.add('visible');
  navBar.classList.remove('hidden');
}

function hideNav() {
  if (window.scrollY !== 0) {
    navBar.classList.remove('visible');
    navBar.classList.add('hidden');
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    showNav();
  } else {
    hideNav();
  }
});

// Mostrar navbar al pasar el mouse por la barra (aunque esté oculta parcialmente)
navBar.addEventListener('mouseenter', showNav);
navBar.addEventListener('mouseleave', hideNav);

//modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.galeria-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

//animacion de scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);  
    }
  });
}, {
  threshold: 0.7  
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

//toogle navbar mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-bar ul');
const navItems = document.querySelectorAll('.nav-bar ul li a');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

//swiper-slider
let galeriaSwiper = null;

function initSwiperIfMobile() {
  if (window.innerWidth <= 768 && !galeriaSwiper) {
    galeriaSwiper = new Swiper(".galeria-slider", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (window.innerWidth > 768 && galeriaSwiper) {
    galeriaSwiper.destroy(true, true);
    galeriaSwiper = null;
  }
}

window.addEventListener("load", initSwiperIfMobile);
window.addEventListener("resize", initSwiperIfMobile);


