burger = document.querySelector(".burger");
navlist = document.querySelector(".lists");
rightNav = document.querySelector(".right-nav");
navbar = document.querySelector(".navbar");



burger.addEventListener('click', function(){

   navlist.classList.toggle('vis-resp');
   rightNav.classList.toggle('vis-resp');
   navbar.classList.toggle('h-nav-resp');

   
});




const slides =document.querySelectorAll(".slides");
var count =0;

slides.forEach(
    (slide,index)=>{
     slide.style.left=`${index*100}%`;

    }
)


const goPrev = () => {
    if (count == 0) {
        count = slides.length - 1;
        slideShow();
    } else {
        count--;
        slideShow();
    }
}

const goNext = () => {
    if (count == slides.length - 1) {
        count = 0;
        slideShow();
    } else {
        count++;
        slideShow();
    }
}

const slideShow=() =>{
    slides.forEach(
      (slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`;
      }
    )
}