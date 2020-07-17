$ (function (){
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prew"><img src="images/prev.svg" alt="prew arrow"></button>',
        responsive: [
            {
                breakpoint: 441,
                    settings: {
                        arrows: false
                    }
                   
                }
            }
        ]
    });
});