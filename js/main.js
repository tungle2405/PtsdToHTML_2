const prevIcon = '<img src="./img/arrow-left-square.svg" alt="left">';
const nextIcon = '<img src="./img/arrow-right-square.svg" alt="right">';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    item: 3,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
