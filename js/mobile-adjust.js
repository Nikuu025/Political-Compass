    window.addEventListener("resize", adjustHeader);

    var mobileMenuLanguageSelectors = document.getElementsByClassName("mobile-menu-language-selector"); 

    function adjustHeader()
    {
        if(window.innerWidth < 1000)
        //Small screen
        {
            var navbarItems = document.getElementsByClassName("header-l-r");
            


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

                    //Horizontal adjust
                    var mobileItems = document.getElementsByClassName("mobile-menu-item");

                    if(window.innerWidth > window.innerHeight)
                    {
                            for(let x=0; x<navbarItems.length; x++)
                            {
                                navbarItems[x].style.height="100px";
                            }
                            document.getElementById("logo").style.height = "40px";

                            document.getElementById("mobile-menu-container").style.top = "98px";

                            
                            for(let x=0; x<mobileItems.length; x++)
                            {
                                mobileItems[x].style.minHeight="90px";
                            }

                                    //Adjusts language selectors in mobile menu
                                   for(let x=0; x < mobileMenuLanguageSelectors.length; x++)
                                   {
                                        mobileMenuLanguageSelectors[x].style.height="40px";
                                        mobileMenuLanguageSelectors[x].style.width="40px";
                                   }


                    }
                    else 
                    {
                            for(let x=0; x<navbarItems.length; x++)
                            {
                                navbarItems[x].style.height="150px";
                            }
                            document.getElementById("logo").style.height = "60px";

                            document.getElementById("mobile-menu-container").style.top = "148px";

                            
                            for(let x=0; x<mobileItems.length; x++)
                            {
                                mobileItems[x].style.minHeight="150px";
                                console.log(mobileItems[x]);
                            }


                                    //Adjusts language selectors in mobile menu
                                   for(let x=0; x < mobileMenuLanguageSelectors.length; x++)
                                   {
                                        mobileMenuLanguageSelectors[x].style.height="60px";
                                        mobileMenuLanguageSelectors[x].style.width="60px";
                                   }
                    }
        }


        //Big screen
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
