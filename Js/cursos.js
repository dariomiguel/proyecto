/*SLIDER*/
const slider = document.querySelector('#slider');
let sliderItem = document.querySelectorAll('.item-slide');

const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

function moveNext(){
    slider.style.transform = "translateX(-85%)";
}

function movePrev(){
    slider.style.transform = "translateX(0)";
}

btnNext.addEventListener("click", function(){
    moveNext();
});
btnPrev.addEventListener("click", function(){
    movePrev();
});
/*FIN SLIDER*/
