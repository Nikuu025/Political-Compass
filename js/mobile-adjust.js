    window.addEventListener("resize", adjustHeader);

    function adjustHeader()
    {
        if(window.innerWidth < 1000)
        {
            var navbarItems = document.getElementsByClassName("header-l-r");
            for(let x=0; x<navbarItems.length; x++)
            {
                navbarItems[x].style.height="150px";
            }
            document.getElementById("logo").style.height = "60px";


            var headerMenuItems = document.getElementsByClassName("header-menu-item");
            for(let x=0; x<headerMenuItems.length; x++)
            {
                headerMenuItems[x].style.display="none";
            }

            document.getElementById("mobile-menu").style.display="block";
            document.getElementById("mobile-menu").style.marginRight="20px";
            document.getElementById("header-menu").style.justifyContent="flex-end";

            var languageSelect = document.getElementsByClassName("dropdown-language");
            languageSelect[0].style.display="none";
        }
        else 
        {
            var navbarItems = document.getElementsByClassName("header-l-r");
            for(let x=0; x<navbarItems.length; x++)
            {
                navbarItems[x].style.height="100px";
            }
            document.getElementById("logo").style.height = "40px";

            var headerMenuItems = document.getElementsByClassName("header-menu-item");
            for(let x=0; x<headerMenuItems.length; x++)
            {
                headerMenuItems[x].style.display="block";
            }

            document.getElementById("mobile-menu").style.display="none";
            document.getElementById("header-menu").style.justifyContent="space-around";

            var languageSelect = document.getElementsByClassName("dropdown-language");
            languageSelect[0].style.display="inline-block";
        }

        
        

        console.log(window.innerWidth);
    }
