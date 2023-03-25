import $ from "jquery";
import "slick-carousel";

$(document).ready(() => {
    $(".slider").slick({
        arrows:true,
        dots:true,
        prevArrow: '<img class="slick-prev" src="img/hero/arrow-left.svg">',
        nextArrow: '<img class="slick-next" src="img/hero/arrow-right.svg">',
    });

    function setArrows () {
        const paginationWrapper = document.createElement("div"),
              parent = document.querySelector(".slider"),
              arrowLeft = document.querySelector(".slick-prev"),
              arrowRight = document.querySelector(".slick-next"),
              pagination = document.querySelector(".slick-dots")

        paginationWrapper.classList.add("pagination-wrapper");
        paginationWrapper.append(pagination);
        paginationWrapper.prepend(arrowLeft);
        paginationWrapper.append(arrowRight);
        parent.append(paginationWrapper)
    }

    setArrows();

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

    // $(".description-one__list").click((e) => {
    //     if($(e.target).hasClass("description-one__item")) {
    //         document.querySelector(".description-one__list").forEach(element => {
    //             element.classList.remove("description-one__item_active")
    //         });
    //         $(e.target).toggleClass("description-one__item_active")
    //     }
    // })
})
