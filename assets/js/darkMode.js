let findButton = document.getElementById("darkModeButton");
let findNav = document.getElementById("mainNav");
let findRqstForm = document.getElementById("section-request-form");
let findBody = document.getElementById("body-modiffier");
let findFooter = document.getElementById("footer");
let findLogo = document.getElementsByTagName("img");
let getDarkModeStorage = localStorage.getItem("Dark mode");
let igLogo = document.getElementById("ig-logo");
let tiktokLogo = document.getElementById("tiktok-logo");
let fbLogo = document.getElementById("fb-logo");
let redbbLogo = document.getElementById("redbb-logo");

findButton.addEventListener("click", enableDarkMode);

let theme = localStorage.getItem("Dark mode");
darkModeSwitch(theme);

function darkModeSwitch(theme){
    if(theme == "on"){
        enableDarkMode();
    }else if(theme == "off"){
        disableDarkMode();
    }else{
        enableDarkMode();
        disableDarkMode();
    }
}

function enableDarkMode(){
    localStorage.setItem("Dark mode", "on");
    findNav.removeAttribute("class");
    findNav.setAttribute("class", "navbar navbar-expand-lg darkModeEnabled text-uppercase fixed-top");
    findRqstForm.setAttribute("class", "darkModeEnabled");
    findFooter.setAttribute("class", "darkModeEnabled");
    findBody.setAttribute("class", "darkModeEnabled");
    findLogo[0].removeAttribute("src");
    findLogo[0].setAttribute("src", "./assets/img/logo_lettering_Blanco_2.png");
    findLogo[5].removeAttribute("src");
    findLogo[5].setAttribute("src", "./assets/img/Porsche black.svg");
    igLogo.removeAttribute("src");
    igLogo.setAttribute("src", "./assets/img/ig-bla.png");
    tiktokLogo.removeAttribute("src");
    tiktokLogo.setAttribute("src", "./assets/img/tiktok-wh.png");
    fbLogo.removeAttribute("src");
    fbLogo.setAttribute("src", "./assets/img/fb-bla.png");
    redbbLogo.removeAttribute("src");
    redbbLogo.setAttribute("src", "./assets/img/red-wh.png");
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
    findLogo[5].removeAttribute("src");
    findLogo[5].setAttribute("src", "./assets/img/Porsche white.svg");
    igLogo.removeAttribute("src");
    igLogo.setAttribute("src", "./assets/img/ig.png");
    tiktokLogo.removeAttribute("src");
    tiktokLogo.setAttribute("src", "./assets/img/tik-tok.png");
    fbLogo.removeAttribute("src");
    fbLogo.setAttribute("src", "./assets/img/fb.png");
    redbbLogo.removeAttribute("src");
    redbbLogo.setAttribute("src", "./assets/img/red.png");
    findButton.removeEventListener("click", disableDarkMode);
    findButton.addEventListener("click", enableDarkMode);
}