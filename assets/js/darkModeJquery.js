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
//var time = null;
//var flag = true;

findButton.click(function(){
    enableDarkMode()
    findButton.prop("disabled", true);
    setInterval(() => {
        findButton.prop("disabled", false);
    }, 1000);
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
    darkModeButton.value = "Click to disable Dark Mode";
    findButton.click(function(){
        disableDarkMode();
        findButton.prop("disabled", true);
        setInterval(() => {
        findButton.prop("disabled", false);
        }, 1000);
    });
}

function disableDarkMode(){
    localStorage.setItem("Dark mode", "off");
    findNav.removeClass("darkModeEnabled");
    findRqstForm.removeAttr("class");
    findFooter.removeAttr("class");
    findBody.removeAttr("class");
    findLogo.attr("src", "./assets/img/logo lettering Negro.png");
    findPorsche.attr("src", "./assets/img/Porsche white.svg");
    igLogo.attr("src", "./assets/img/ig.png");
    tiktokLogo.attr("src", "./assets/img/tik-tok.png");
    fbLogo.attr("src", "./assets/img/fb.png");
    redbbLogo.attr("src", "./assets/img/red.png");
    darkModeButton.value = "Click to enable Dark Mode";
    findButton.click(function(){
        enableDarkMode();
        findButton.prop("disabled", true);
        setInterval(() => {
        findButton.prop("disabled", false);
        }, 1000);
    });
}

/*if (flag) {
        Flag = false;
        time = setInterval(function () {
            clearInterval(time);//clear timer
            Flag = true;
        }, 1000);//A second is available
    return true;
    } else {
        return false;
    }*/