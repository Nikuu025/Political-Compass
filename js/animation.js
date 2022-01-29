window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    console.log(scroll)

    console.log(isShowed);
    
    if(scroll > 70) 
    {
        document.getElementById("animation-static").classList.add("animation-invisible");
        document.getElementById("animation-static").classList.remove("animation-visible");
                setTimeout(() =>
                {
                    document.getElementById("animation-static").style.opacity="0";
                }, 500);
    }
    else if(isShowed == 0)
    {
        document.getElementById("animation-static").classList.add("animation-visible");
        document.getElementById("animation-static").classList.remove("animation-invisible");
                setTimeout(() =>
                {
                    document.getElementById("animation-static").style.opacity="1";
                }, 500);
    }
});

