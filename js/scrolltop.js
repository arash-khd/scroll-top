var scroll_top = document.getElementsByClassName("scroll-top")[0];

if (window.scrollY == 0) {
    scroll_top.style.opacity = 0;
}

window.addEventListener("scroll", () => {
 
    
    if (window.scrollY > 1000) {

        scroll_top.style.opacity = 1;

    }
    else {
        scroll_top.style.opacity = 0;
    }



});
scroll_top.addEventListener("click", () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });


});

