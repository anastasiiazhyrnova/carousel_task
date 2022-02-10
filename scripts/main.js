'use strict';

let slides = document.getElementsByClassName("slide");
let btnRight = document.getElementById("button-right");
let btnLeft = document.getElementById("button-left");
let indexOfSlide = 1;
const countOfSlides = slides.length;

ShowImg(indexOfSlide);

function ShowImg(n){
  if(n < 1){
    indexOfSlide = countOfSlides;
  } else if(n > countOfSlides){
    indexOfSlide = 1;
  }
  for (let i = 0; i < countOfSlides; i++) {
    slides[i].style.display = 'none'; 
  }
 
  slides[indexOfSlide-1].style.display = 'block';
}

function slideScroll(n){
  ShowImg(indexOfSlide += n);
}

btnLeft.onclick = function(){
  slideScroll(-1);
}
btnRight.onclick = function(){
  slideScroll(-1);
}