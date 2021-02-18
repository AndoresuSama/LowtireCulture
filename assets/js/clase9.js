let findButton = document.getElementById("darkModeButton");
let findNav = document.getElementById("mainNav");
let findRqstForm = document.getElementById("section-request-form");
let findBody = document.getElementById("body-modiffier");
let findFooter = document.getElementById("footer");
let findLogo = document.getElementsByTagName("img");
let getDarkModeStorage = localStorage.getItem("Dark mode");

findButton.addEventListener("click", enableDarkMode);

let tema = localStorage.getItem("Dark mode");
darkModeSwitch(tema);

function darkModeSwitch(tema){
    if(tema == "on"){
        enableDarkMode();
    }else if(tema == "off"){
        disableDarkMode();
    }else{
        enableDarkMode();
        disableDarkMode();
    }
}

/*function darkModeSwitch(tema){
    if(tema == off){
        findButton.addEventListener("click", enableDarkMode)
    }
}*/

function enableDarkMode(){
    localStorage.setItem("Dark mode", "on");
    findNav.removeAttribute("class");
    findNav.setAttribute("class", "navbar navbar-expand-lg darkModeEnabled text-uppercase fixed-top");
    findRqstForm.setAttribute("class", "darkModeEnabled");
    findFooter.setAttribute("class", "darkModeEnabled");
    findBody.setAttribute("class", "darkModeEnabled");
    findLogo[0].removeAttribute("src");
    findLogo[0].setAttribute("src", "./assets/img/logo_lettering_Blanco_2.png");
    darkModeButton.value = "Click to enable Light Mode";
    findButton.removeEventListener("click", enableDarkMode);
    findButton.addEventListener("click", disableDarkMode);
}

function disableDarkMode(){
    localStorage.setItem("Dark mode", "off");
    findNav.removeAttribute("class");
    findNav.setAttribute("class", "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top");
    findRqstForm.removeAttribute("class");
    findFooter.removeAttribute("class");
    findBody.removeAttribute("class");
    findLogo[0].removeAttribute("src");
    findLogo[0].setAttribute("src", "./assets/img/logo lettering Negro.png");
    findButton.removeEventListener("click", disableDarkMode);
    findButton.addEventListener("click", enableDarkMode);
}