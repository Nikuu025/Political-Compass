    var isShowed = 0;

    function showMenu()
    {
        if(isShowed==0)
        {
            isShowed=1;
            document.getElementById("mobile-menu-container").classList.remove("mobile-menu-closing");
            document.getElementById("mobile-menu-container").classList.add("mobile-menu-container");
            document.getElementById("mobile-menu-container").style.display="flex";
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
        }
    }


