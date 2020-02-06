
window.onload = function(){
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



    var scrollPos = 0;

    window.addEventListener('scroll', function(){
    
    if ((document.body.getBoundingClientRect()).top > scrollPos){
            document.getElementById("navbar").animate([
                {transform: 'translateY(-200px)'},
                {transform: 'translateY(0px)'}
            ],{
                duration: 1000
            });
            document.getElementById("navbar").style.top = "0px";
        }
        else{
            document.getElementById("navbar").animate([
                {transform: 'translateY(0px)'},
                {transform: 'translateY(-300px)'}
            ],{
                duration: 1000
            });
            document.getElementById("navbar").style.top = "-300px";
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    });


    //CONTACT
    document.getElementById('accessContact').onclick = function(){
        document.getElementById('contact').style.cssText = "opacity: 1; z-index: 9999";
    }

    document.getElementById('close').onclick = function(){
        document.getElementById('contact').style.cssText = "opacity: 0; z-index: -1";

    }
    //END CONTACT

    var content = document.getElementsByClassName('content');
    
    for (var i=0; i < content.length; i++) {
        content.item(i).onclick = function(){
            console.log(content);
        }
    }
}

