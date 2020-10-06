// auto reload on size change





const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')



        burger.addEventListener('click',() => {
                //toggle Nav
            nav.classList.toggle('nav-active');
        
            //animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navlinkfade 0.5s ease forwards ${index / 5 + 0.3}s`;
                }
            });
            //toggle cross
        
            burger.classList.toggle('toggle');


        });

    };




navSlide();

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//button

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

//counter 
let counter = 1;
let size = carouselImages[1].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size *counter ) + 'px)'; 

//button listeners

nextButton.addEventListener('click',()=> {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' +(-size *counter ) + 'px)';
});

prevButton.addEventListener('click',()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' +(-size *counter ) + 'px)';
}); 

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' +(-size *counter ) + 'px)';
    
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -counter ;
        carouselSlide.style.transform = 'translateX(' +(-size *counter ) + 'px)';
    
    }
});

