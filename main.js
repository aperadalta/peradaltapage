const NAVSLIDE = () =>{
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    burguer.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burguer.classList.toggle(`toggle`);
    });
}

NAVSLIDE();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-300px)'}
    ],{
        duration: 1000
    });
  }
  prevScrollpos = currentScrollPos;
}