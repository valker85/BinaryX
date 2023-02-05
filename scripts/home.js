const modalWindow = document.querySelector('.modal-window')
const body = document.querySelector('body')

$('.heroes-slider').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 2.32,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

function videoModal(condition) {
    if(condition === 'open'){
        body.style.overflow = 'hidden'
        modalWindow.classList.add('active')
    } else{
        body.style.overflow = 'auto'
        modalWindow.classList.remove('active')
    }
}