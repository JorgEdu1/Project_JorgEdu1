var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    mousewheel: true,
    keyboard: true,
  });
document.addEventListener('DOMContentLoaded',() => {
  new TypeIt(".animated",{
      speed: 200,
      loop: true,
  }).type('Hello World! &#x1F596', {delay: 900})
  .delete(15)
  .type('Jorge Eduardo Aqui!',{delay:500})
  .go(); 
})