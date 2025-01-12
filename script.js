const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var a = document.getElementById("elem1")

// var img =a.getAttribute('class')
// console.log(b);

function page3Animation(){
  var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});


elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  


var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-img")
        fixed.style.backgroundImage =`url(${image})`

    })
})

}

function swiperAnimation (){
  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
 
});
}

swiperAnimation();
page3Animation();


var menu = document.querySelector("nav h3")
var full = document.querySelector('#full-scr')

menu.addEventListener("click" ,  function(){
 
  full.style.top = 0
})

var loader = document.querySelector("#loader")

setTimeout(() => {
  loader.style.top = "-100%"
}, 4000);