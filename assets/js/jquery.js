let findButton = $("#darkModeButton");
let findNav = $("#mainNav");
let findRqstForm = $("#section-request-form");
let findBody = $("#body-modiffier");
let findFooter = $("#footer");
let findLogo = $("#img-logo");
let findPorsche = $("#porsche");
let getDarkModeStorage = localStorage.getItem("Dark mode");
let igLogo = $("#ig-logo");
let tiktokLogo = $("#tiktok-logo");
let fbLogo = $("#fb-logo");
let redbbLogo = $("#redbb-logo");

findButton.click(function(){
    enableDarkMode()
})

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
    findNav.addClass("darkModeEnabled");
    findRqstForm.addClass("darkModeEnabled");
    findFooter.addClass("darkModeEnabled");
    findBody.addClass("darkModeEnabled");
    findLogo.attr("src", "./assets/img/logo_lettering_Blanco_2.png");
    findPorsche.attr("src", "./assets/img/Porsche black.svg");
    igLogo.attr("src", "./assets/img/ig-bla.png");
    tiktokLogo.attr("src", "./assets/img/tiktok-wh.png");
    fbLogo.attr("src", "./assets/img/fb-bla.png");
    redbbLogo.attr("src", "./assets/img/red-wh.png");
    darkModeButton.value = "Click to enable Light Mode";
    findButton.click(function(){
        disableDarkMode()
    })
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