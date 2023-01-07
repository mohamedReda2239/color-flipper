let simpleButton = document.querySelector(".simple");
let hexButton = document.querySelector(".hex");



// when user click on simple button or hex button
/*
    - check if the button has a class active
    - if contains it    -----> dont do any thing
    - if not contain it -----> add class active and remove it from other button
*/

let checkSimpleActive = simpleButton.classList.contains("active");
let checkHexActive = hexButton.classList.contains("active");

// active class for simple button
simpleButton.addEventListener("click" , function () {

    // check if simple button has an active class
    if (checkSimpleActive !== "true") {
        // addding active button to simple button
        simpleButton.classList.add("active");
        // remove active from hex button
        hexButton.classList.remove("active")
    }

},);


// active class for simple button
hexButton.addEventListener("click" , function () {

    // check if simple button has an active class
    if (checkHexActive !== "true") {
        // addding active button to simple button
        hexButton.classList.add("active");
        // remove active from hex button
        simpleButton.classList.remove("active")
    }
    
},);


// when clicking in (click me) button
/*
    - checking if simple button contains active class
    - the color would be one of known colors
    - change the color name
    
    - checking if hex button contains active class
    - the color be unkown color
*/

let clickMeButton = document.getElementById("clickMe");
let colorName = document.getElementById("color-name");

clickMeButton.addEventListener("click" , function () {

    if (simpleButton.classList.contains("active")) {
        const simpleColors = ["green", "red", "rgba(133,122,200)", "#f15025"];
        // getting a random number
        let colorIndex = Math.floor(Math.random()*simpleColors.length);
        // get a random color 
        document.body.style.backgroundColor = simpleColors[colorIndex];
        // change the color name
        colorName.textContent = simpleColors[colorIndex];
    }    else if (hexButton.classList.contains("active")) {
        const hexLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        // getting hex color
        let hexColor = [];
        for (let i = 0 ; i < 6 ; i++) {
            hexColor.push(hexLetters[Math.floor(Math.random()*hexLetters.length)]);
        }
        document.body.style.backgroundColor = `#${hexColor.join("")}`;
        colorName.textContent = `#${hexColor.join("")}`;
    } 
})
