const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const footer = document.querySelector(".footer");
const main = document.querySelector('.to-hide');
const navLink = document.querySelectorAll('.nav__link');

const handleNav = () => {
   navBtn.classList.toggle("is-active");
   navMobile.classList.toggle("nav-mobile--active");
   
   // Dodaj lub usuń klasę 'hider' z footera w zależności od stanu nawigacji
   if (navMobile.classList.contains("nav-mobile--active")) {
      footer.classList.add("hider");
   } else {
      footer.classList.remove("hider");
   }

   main.classList.toggle('hider');
};

navBtn.addEventListener("click", handleNav);

// footer year
const handleCurrentYear = () => {
   const year = new Date().getFullYear();
   footerYear.innerText = year;
};
handleCurrentYear();

// remove 'hider' class from main and 'nav-mobile--active' class when a nav link is clicked
navLink.forEach(link => {
   link.addEventListener("click", () => {
      main.classList.remove('hider');
      navMobile.classList.remove('nav-mobile--active');
      navBtn.classList.remove('is-active');
      footer.classList.remove("hider"); // Usuń klasę 'hider' z footera po kliknięciu linku nawigacyjnego
   });
});
