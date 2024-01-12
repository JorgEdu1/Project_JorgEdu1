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

document.getElementById('downloadButton').addEventListener('click', function() {
  
  var curruculoPath = './CV.pdf';

  var link = document.createElement('a');
  link.href = curruculoPath;
  link.download = 'CV-Jorge_Eduardo_Silva_Sousa.pdf';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
});