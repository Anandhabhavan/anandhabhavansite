/* Today Offers */
$(document).ready(function(){
$('.carousel').slick({
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
dots:true,
centerMode: true,
responsive: [{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
// centerMode: true,

}

}, {
breakpoint: 800,
settings: {
slidesToShow:3,
slidesToScroll: 1,
dots: true,
infinite: true,

}
},  {
breakpoint: 480,
settings: {
slidesToShow:3,
slidesToScroll: 1,
dots: true,
infinite: true,
autoplay: true,
autoplaySpeed: 2000,
}
}]
});
});   
/* Today Offers end */


/* Shop by category */
$(document).ready(function(){
$('.carousel2').slick({
speed: 1000,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: false,
autoplaySpeed: 2500,
dots:false,
centerMode: true,
responsive: [{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
// centerMode: true,

}

}, {
breakpoint: 800,
settings: {
slidesToShow:2,
slidesToScroll: 1,
dots: true,
infinite: true,

}
},  {
breakpoint: 480,
settings: {
slidesToShow:2,
slidesToScroll: 1,
dots: true,
infinite: true,
autoplay: false,
autoplaySpeed:2500,
}
}]
});
}); 
/* Shop by category end */



/* Best Selling Products */
$(document).ready(function(){
$('.carousel3').slick({
speed: 1100,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: false,
autoplaySpeed: 1800,
dots:false,
centerMode: false,
responsive: [{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
// centerMode: true,

}

}, {
breakpoint: 800,
settings: {
slidesToShow:3,
slidesToScroll: 1,
dots: false,
infinite: true,

}
},  {
breakpoint: 480,
settings: {
slidesToShow:3,
slidesToScroll: 1,
dots: false,
infinite: true,
autoplay: false,
autoplaySpeed:2500,
}
}]
});
}); 
/* Best Selling Products end */
