const swiperMainBanners = new Swiper('.main-banners', {
    direction: 'horizontal',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperModal = new Swiper('.modal-swiper', {
    direction: 'horizontal',
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// modais
jQuery('[data-modal]').click(function () {
    var clickModal = jQuery(this);
    jQuery('[data-item]').each(function (index, modal) {
        if (clickModal.data('modal') == jQuery(modal).data('item')) {
            jQuery('.modais').addClass('active');
            jQuery(modal).addClass('active');
        }
    });
});

jQuery('.close-modal').click(function () {
    jQuery('[data-item]').each(function (index, modal) {
        jQuery('.modais').removeClass('active');
        jQuery(modal).removeClass('active')
    })
});