// Moving slider on main page

const slider = document.querySelectorAll('.slide');
const nextSlidebutton = document.querySelector('#nextSlidebtn');
const prevSlidebutton = document.querySelector('#prevSlidebtn');
const slideContainer = document.querySelectorAll('.slide');

let slidecontainerArray = Array.from(slideContainer);
console.log(slidecontainerArray);

nextSlidebutton.addEventListener("click", () => {
    let i = 1;
    if(i < slidecontainerArray.length){
        document.querySelector("#slideFirstContainer").style.right = ;
        i++; 
    }
})