import $ from "jquery";
import lax from 'lax.js'
import "slick-carousel";

$(document).ready(() => {
    $(".slider").slick({
        arrows:true,
        dots:true,
        appendArrows: ".pagination-wrapper",
        appendDots: $(".pagination"),
        prevArrow: '<button class="slick-prev"><img src="img/hero/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="img/hero/arrow-right.svg"></button>',
        slidesToShow: 1,
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    lax.init();
    lax.addDriver('scrollY', function () {
        return window.scrollY
    });
    lax.addElements('.bubble_top', {
        scrollY: {
          translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [50, 0, 50],
          ],
        }
    });
    lax.addElements('.bubble_bottom', {
        scrollY: {
            translateY: [
                ["elInY", "elCenterY", "elOutY"],
                [-200, -100, 0],
            ],
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [100, 50, 0],
            ],
        },
    });

    function removeActiveClass () {
        const list = document.querySelectorAll(".description-one__item");
        list.forEach(element => {
            element.classList.remove("description-one__item_active");
        });
    }

    function toggleClass (item) {
        item.classList.toggle("description-one__item_active");
    }
    
    document.querySelector(".description-one__list").addEventListener("click",(e) => {
        const listItem = e.target;
        if(listItem.classList.contains("description-one__item_active")) {
            toggleClass(listItem);
        }else {
            removeActiveClass();
            toggleClass(listItem);
        }
    })

})
