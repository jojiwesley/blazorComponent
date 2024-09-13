export function onLoad() {
    const swiper = new Swiper('.swiper__bannerSlider', {
        // Optional parameter   s
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

export function onUpdate() {
  
}

export function onDispose() {
   
}