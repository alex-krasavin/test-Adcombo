import $ from "jquery";
import "slick-carousel";

$(document).ready(() => {
    $(".slider").slick({
        arrows:true,
        dots:true,
        appendArrows: ".pagination-wrapper",
        appendDots: $(".pagination"),
        prevArrow: '<button class="slick-prev"><img src="img/hero/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="img/hero/arrow-right.svg"></button>',
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
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
