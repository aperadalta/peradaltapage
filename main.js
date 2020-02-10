
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
            document.getElementById("navbar").style.top = "0";
        }
        else{
            document.getElementById("navbar").style.top = "-300px";
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    });


    //CONTACT
    document.getElementById('accessContact').onclick = function(){
        document.getElementById('contact').style.cssText = "opacity: 1; z-index: 999";
        document.getElementById('close').style.cssText = "opacity: 1; z-index: 9999";
    }

    
    //END CONTACT

    const content = document.getElementsByClassName('content'),
          closing = document.getElementById('close');
    var makeFullScreen;
    
    for (var i=0; i < content.length; i++) {
        content.item(i).onclick = function(){
            var transform = "position: fixed; top: 0; width: 100%; height: 100%; display: block; background-color: white;";
            makeFullScreen = this.id;
            document.getElementById(makeFullScreen+'Content').style.cssText = transform;
            closing.style.cssText = "opacity: 1; z-index: 9999";
        }
    }

    closing.onclick = function(){
        var close = "opacity: 0; z-index: -1";
        document.getElementById('contact').style.cssText = close;
        closing.style.cssText = close;
        document.getElementById(makeFullScreen+'Content').style.cssText = close;
        
    }
}

