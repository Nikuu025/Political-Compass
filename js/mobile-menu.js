    var isShowed = 0;

    function showMenu()
    {
        if(isShowed==0)
        {
            isShowed=1;
            document.getElementById("mobile-menu-container").classList.remove("mobile-menu-closing");
            document.getElementById("mobile-menu-container").classList.add("mobile-menu-container");
            document.getElementById("mobile-menu-container").style.display="flex";


                //Makes animation fade off to not be visible over appearing mobile menu
                document.getElementById("animation-static").classList.add("animation-invisible");
                document.getElementById("animation-static").classList.remove("animation-visible");
                        setTimeout(() =>
                        {
                            document.getElementById("animation-static").style.opacity="0";
                        }, 500);
        }
        else 
        {
            isShowed=0;
            document.getElementById("mobile-menu-container").classList.remove("mobile-menu-container");
            document.getElementById("mobile-menu-container").classList.add("mobile-menu-closing");
                setTimeout(() =>
                {
                    document.getElementById("mobile-menu-container").style.display="none";
                }, 500);


                    //Makes animation visible again after closing the mobile menu
                    document.getElementById("animation-static").classList.add("animation-visible");
                    document.getElementById("animation-static").classList.remove("animation-invisible");
                            setTimeout(() =>
                            {
                                document.getElementById("animation-static").style.opacity="1";
                            }, 500);
        }
    }


