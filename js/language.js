    var button = document.getElementById("language-button");
    var link = document.getElementsByClassName("language-selector");

    console.log(document.documentElement.lang);

    if  (document.documentElement.lang == "en")
    {

        button.style.backgroundImage = "url('../img/flag_en.png')";

        link[0].style.backgroundImage = "url('../img/flag_pl.png')";
        link[1].style.backgroundImage = "url('../img/flag_de.png')";

        link[0].href = "../pl/index.html";
        link[1].href = "../de/index.html";


    }


    if  (document.documentElement.lang == "pl")
    {

        button.style.backgroundImage = "url('../img/flag_pl.png')";

        link[0].style.backgroundImage = "url('../img/flag_en.png')";
        link[1].style.backgroundImage = "url('../img/flag_de.png')";

        link[0].href = "../en/index.html";
        link[1].href = "../de/index.html";


    }


    if  (document.documentElement.lang == "de")
    {

        button.style.backgroundImage = "url('../img/flag_de.png')";

        link[0].style.backgroundImage = "url('../img/flag_en.png')";
        link[1].style.backgroundImage = "url('../img/flag_pl.png')";

        link[0].href = "../en/index.html";
        link[1].href = "../pl/index.html";


    }
