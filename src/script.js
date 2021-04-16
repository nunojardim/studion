$(document).ready(function(){
    const slickOptions = {
        dots: false,
        autoplay: true,
        autoplaySpeed:3000,
        prevArrow: `<button type="button" class="slick-prev slide__prev-arrow">Previous</button>`,
        nextArrow:`<button type="button" class="slick-next slide__next-arrow">Next</button>`,
    };
    $('.slider').slick(slickOptions)
     
    });