const img = document.getElementById("imgs")

function temp(){
    img.src = "img1.jpg"
    setTimeout("img1()", 2000)
}
function img1(){
    img.src = "img2.webp"
    setTimeout("img2()", 2000)
}
function img2(){
    img.src = "img3.webp"
    setTimeout("temp()", 2000)
}
temp()