// alert("fount in external file");

// console.info("Lamek Abraha");

// console.dir(document.body);

// Changing elements by their ID

// document.getElementById("myHeading").innerHTML = "Lamek Abraha";

// changing 'HOME' link when in index.html

// document.querySelector("nav ul li").setAttribute("class", "currentPage")

/*let colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)
for(let i=0; i<colourButtons.length;i++){
    colourButtons[i].style.backgroundColor = "green"
}*/

// let myButton = document.getElementById("myTestBtn")
// myButton.addEventListener("click", function(){
//     console.info("hi")
// })

// let redBtn = document.querySelector(".red")
// let documentBody = document.querySelector("body")
// redBtn.addEventListener("click", function() {
//     console.info("Red clicked")
//     documentBody.setAttribute("class", "redBack")
// })

// let greenBtn = document.querySelector(".green")
// greenBtn.addEventListener("click", function() {
//     console.info("Green clicked")
//     documentBody.setAttribute("class", "greenBack")
// })

// let blueBtn = document.querySelector(".blue")
// blueBtn.addEventListener("click", function() {
//     console.info("Blue clicked")
//     documentBody.setAttribute("class", "blueBack")
// })

// let resetBtn = document.querySelector(".reset")
// resetBtn.addEventListener("click", function() {
//     console.info("Default clicked")
//     documentBody.removeAttribute("class")
// })

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click", chgColour);
}

function chgColour(ev){
    console.info(ev.target.classList[0]);
    let chosenColour = ev.target.classList[0]+"Back"
    document.body.setAttribute("class", chosenColour)
}

// Image Rotator

let imageAr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg",
]
let imageCounter = 0; 

let imageRotator = document.getElementById("myImages");
setInterval(chgImage, 2000);

function chgImage(){
    imageCounter++;
    if (imageCounter>=imageAr.length){
        imageCounter = 0
    }
    imageRotator.setAttribute("src", imageAr[imageCounter]);
}
chgImage();


