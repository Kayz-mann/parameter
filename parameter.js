i = 1
const sliderAnimate =() => {
    countImg = document.getElementsByTagName("img").length;

// Helps to reset counter
if(i > countImg) {i = 1;}

// remove z-index from the previous element
x = i - 1;
if(x !=0) {document.getElementById(`${i-1}`).style.zIndex ="0";}
if(x==0) {document.getElementById(`${countImg}`).style.zIndex = "0";}
document.getElementById(`${i}`).style.zIndex ="500";

// document.getElementById(`${i}`).id = "8"
i++
}

setInterval(sliderAnimate, 5000);


