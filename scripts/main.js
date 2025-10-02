//topSlider__slider
document.addEventListener('DOMContentLoaded', () => {
    const topSlider = new Swiper('.topSlider__slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        // },
    })
    //review__slide
    const rewiesSlider = new Swiper ('.reviewSlider', { 
      loop: true,
        pagination: {
        el: '.swiper-pagination',
        },
    }) 
});

