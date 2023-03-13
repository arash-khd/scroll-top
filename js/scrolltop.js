var scroll_top = document.getElementsByClassName("scroll-top")[0];

if (window.scrollY == 0) {
    scroll_top.style.opacity = 0;
}

window.addEventListener("scroll", () => {
 
    
    if (window.scrollY > 300) {

        scroll_top.style.opacity = 1;

    }
    else {
        scroll_top.style.opacity = 0;
    }



});
scroll_top.addEventListener("click", () => {
   const scrollTop = setInterval(scrolltop, 3);
    function scrolltop() {
        window.scrollBy(0, -10);
}
window.addEventListener("scroll",()=>{
    if (window.scrollY == 0) {
        clearInterval(scrollTop);
     }
    
});


});

