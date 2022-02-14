'use strict';

const  slides = document.getElementsByClassName('slide');
const btnRight = document.getElementById('button-right');
const btnLeft = document.getElementById('button-left');
let indexOfSlide = 1;
const countOfSlides = slides.length;

ShowImg(indexOfSlide);

function ShowImg(n) {
  if(n < 1){
    indexOfSlide = countOfSlides;
  } else if(n > countOfSlides){
    indexOfSlide = 1;
  }
  
  for (let i = 0; i < countOfSlides; i++) {
    slides[i].style.display = 'none'; 
  }
  slides[indexOfSlide - 1].style.display = 'block';
}

const slideScroll = (n) =>{
  ShowImg(indexOfSlide += n);
};

btnLeft.onclick = () =>{
  slideScroll(-1);
};

btnRight.onclick = () => {
  slideScroll(-1);
};
