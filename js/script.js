
var navbar = document.getElementById("navbar");
var back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll",function(){


    back_to_top.classList.toggle("back_to_top_hide",window.scrollY > 200);




    navbar.classList.toggle("sticky",window.scrollY > 200)
})

//preloader

var preloader = document.querySelector(".preloader");

window.addEventListener("load",function(){
    preloader.classList.add("preloader_hide")
})


//mixltup

var mixer = mixitup('.rekha');

//venobox
new VenoBox();


//Counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//Slick slider
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-left pre_Arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_Arrow"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          }
        },
       
        {
          breakpoint: 576,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
          }
        }
      ]
});

 //Sing_in
 var sing_in = document.querySelector(".sing_in");  
 var sing_in_btn = document.querySelector(".nav-btn a");  
 sing_in_btn.addEventListener("click",function(){
    sing_in.classList.toggle("sing_btn_show");
 })



