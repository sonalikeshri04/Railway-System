let div = document.querySelector('div');
let navLinks = document.querySelector('header navbar a');

window.onscroll = () =>{
    div.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a [href*='+ id + ']').classList.add('active');
            })
        }
    })
}



const carousel = document.querySelector(".carousel"),
firstImg=carousel.querySelectorAll("img")[0];
arrwIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging=false,prevPageX, prevScrollLeft, positionDiff;

const showHideIcons =() => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrwIcons[0].style.display = carousel.scrollLeft == 0 ? "none":"block";
    arrwIcons[0].style.display = carousel.scrollLeft == scrollWidth ? "none":"block";
}

arrwIcons.forEach(icon => {
    icon.addEventListener("click",()=>{
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id =="left"? -firstImgWidth :firstImgWidth;
        setTimeout(()=>showHideIcons(),60);
    });
});

const autoSlide=() => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft){
    return carousel.scrollLeft += positionDiff > firstImgWidth/3 ? valDifference: -positionDiff
    }
    carousel.scrollLeft += positionDiff > firstImgWidth/3 ? valDifference: -positionDiff;
}
const dragStart = (e) => {
    isDragStart=true;
    prevPageX=e.pageX || e.touches[0].pageX;
    prevScrollLeft=carousel.scrollLeft;
      
}
 const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft=e.prevScrollLeft - positionDiff;
    showHideIcons();

 }

 const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
 }

 carousel.addEventListener("mousedown",dragStart);
 carousel.addEventListener("touchstart",dragStart);

 carousel.addEventListener("mousemove",dragging);
 carousel.addEventListener("touchmove",dragging);
 carousel.addEventListener("mouseup",dragStop);
 carousel.addEventListener("mouseleave",dragStop);
 carousel.addEventListener("touchend",dragStop);


const wrappers = document.querySelector('.wrapper1');
const loginlLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrappers.classList.add('active');
});

loginlLink.addEventListener('click',()=>{
    wrappers.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrappers.classList.remove('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrappers.classList.remove('active-popup');
});

