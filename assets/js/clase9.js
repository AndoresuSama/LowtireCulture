let findButton = document.getElementById("darkModeButton");
let findNav = document.getElementById("mainNav");
let findRqstForm = document.getElementById("section-request-form");
let findBody = document.getElementById("body-modiffier");
let findFooter = document.getElementById("footer");
let findLogo = document.getElementsByTagName("img");

if(findButton.value == "Click to enable Dark Mode"){
    findButton.addEventListener("click",enableDarkMode);
}
if(document.getElementById("darkModeButton").value == "Click to enable Light Mode"){
    findButton.addEventListener("click",disableDarkMode);
}

function enableDarkMode(){
    findNav.removeAttribute("class");
    findNav.setAttribute("class", "navbar navbar-expand-lg darkModeEnabled text-uppercase fixed-top");
    findRqstForm.setAttribute("class", "darkModeEnabled");
    findFooter.setAttribute("class", "darkModeEnabled");
    findBody.setAttribute("class", "darkModeEnabled");
    findLogo[0].removeAttribute("src");
    findLogo[0].setAttribute("src", "./assets/img/logo_lettering_Blanco_2.png");
    darkModeButton.value = "Click to enable Light Mode"
}

function disableDarkMode(){
    findNav.removeAttribute("class");
    findNav.setAttribute("class", "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top");
    findRqstForm.removeAttribute("class");
    findFooter.removeAttribute("class");
    findBody.removeAttribute("class");
    findLogo[0].removeAttribute("src");
    findLogo[0].setAttribute("src", "./assets/img/logo lettering Negro.png");
}