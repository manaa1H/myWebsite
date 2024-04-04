//Part2 JS: Colour Changer
// Your code for the color changer and other functionalities here
const themeTwo = document.getElementById('themeTwo');
const bannerHeader = document.getElementById('banner-header-about');
const gridParent =  document.getElementById('grid-parent');
const mainGrid =  document.getElementById('main-grid');
const fontChange =  document.querySelectorAll('body, h1, h2, p, ul, li');

themeOne.addEventListener("click", function(){
    console.log("SwitchColorThemeTwo clicked");
    document.body.style.backgroundColor = "#f5b4e6";
    bannerHeader.style.backgroundColor = "rgb(96, 19, 96)";
    gridParent.style.backgroundColor = "#f5b4e6";
    mainGrid.style.backgroundColor = "rgb(231, 214, 233)";
    fontChange.forEach(element => {
        element.style.fontFamily = "monospace"; // Change to the desired font family
    });
});

themeTwo.addEventListener("click", function(){
    console.log("SwitchColorThemeTwo clicked");
    document.body.style.backgroundColor = "rgb(71, 10, 10)";
    bannerHeader.style.backgroundColor = "#90306d";
    gridParent.style.backgroundColor = "rgb(71, 10, 10)";
    mainGrid.style.backgroundColor = "rgb(255, 255, 255)";
    fontChange.forEach(element => {
        element.style.fontFamily ="'Lucida Handwriting', cursive"; // Change to the desired font family
    });
});

themeThree.addEventListener("click", function(){
    console.log("SwitchColorThemeTwo clicked");
    document.body.style.backgroundColor = "rgb(14, 61, 36)";
    bannerHeader.style.backgroundColor = "rgb(144, 187, 221)";
    gridParent.style.backgroundColor = "rgb(14, 61, 36)";
    mainGrid.style.backgroundColor = "#9ec6b0";
    fontChange.forEach(element => {
        element.style.fontFamily = 'Fantasy, Papyrus'; // Change to the desired font family
    });
});

