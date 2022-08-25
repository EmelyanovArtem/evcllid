// document.addEventListener("DOMContentLoaded", ready);

document.addEventListener("DOMContentLoaded", function() {
  let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu')
let burgerLink = document.querySelectorAll('.burger-menu__link')

burger.addEventListener('click', function() {

  burger.classList.toggle('burger--active');

  burgerMenu.classList.toggle('burger-menu--active')

  document.body.classList.toggle('stop-scroll');

})

burgerLink.forEach(function(elemet) {
  elemet.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    burgerMenu.classList.remove('burger-menu--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Поле поиска

let magnifier = document.querySelector('.header__search');
let searchPanel = document.querySelector('.search-panel')
let panelClose = document.querySelector('.search-panel__close');

magnifier.addEventListener('click', function() {
  searchPanel.classList.toggle('search-panel--active');
  magnifier.classList.toggle('header__img--disable');
  console.log('open');
})

panelClose.addEventListener('click', function() {
  searchPanel.classList.remove('search-panel--active');
  magnifier.classList.remove('header__img--disable');
  console.log('close');
})

// Табы

let tabBtn = document.querySelectorAll('.work__text-top');
let textAll = document.querySelectorAll('.work__article');

tabBtn.forEach(function (element) {  // тут стрелочная
    // element.addEventListener('click', function(e){
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        console.log(path);

        tabBtn.forEach(function(btn) {
            btn.classList.remove('work__text-top--orange');
        })
        e.currentTarget.classList.add('work__text-top--orange');

        textAll.forEach(function(element) {element.classList.remove('work__article--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('work__article--active');

    })
});

// Аккордион

jQuery(document).ready(function($){
  $(".accordion").accordionjs();({
    /*elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'*/
    activeIndex: false,
    closeAble: true
  })
});

// Swiper

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

});

// Бургер

