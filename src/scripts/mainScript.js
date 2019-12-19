//check if doc is loaded
document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll(".tabContent");
    let slides = document.getElementsByClassName("gallery");

    function openLightbox() {
          document.getElementById("lightBox").style.display = "block";
        }
    function closeLightbox() {
          document.getElementById("lightBox").style.display = "none";
        }
    function currentSlide(n) {
          showSlides(slideIndex = n);
        }
    function showSlides(n) {
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
        }
    function plusSlides(n) {
          showSlides(slideIndex += n);
        }

    document.addEventListener("click", function(e) {
        //button listner
        if (e.target.classList.contains("button")) {
            const targetContent = document.querySelector(e.target.dataset.target);
            const scrollDiv = document.querySelectorAll(".scroll");

            //scroll text back on top
            scrollDiv.forEach (function(div){
                div.scrollTop = 0;
            });
            
            //dispaly hidden tabs
            tabContents.forEach(function(content) {
                if (content == targetContent) {
                    content.classList.add("active");
                } 
                else {
                    content.classList.remove("active"); 
                }
            });
        }
        
        //lightbox display
        else if (e.target.classList.contains("lbBtn")) {
            let slideIndex = e.target.getAttribute("alt").substr(-1)
            openLightbox()
            currentSlide(slideIndex)
        }
        else if (e.target.classList.contains("close")){
            closeLightbox()
        }
        else if (e.target.classList.contains("prev")) {
            plusSlides(-1)
        }
        else if (e.target.classList.contains("next")) {
            plusSlides(1)
        }

    });

    //"move" arrow buttons
    //media queries
    if (matchMedia){
        const smallScreen = window.matchMedia("(max-width: 850px)");
        smallScreen.addListener(moveArrows);
        moveArrows(smallScreen);

    }

    //moving function
    function moveArrows(smallScreen) {
        const bigArrows = document.querySelectorAll(".bigScreenArrow");
        const smallArrows = document.querySelectorAll(".smallScreenArrow");
        
        bigArrows.forEach(function(button){
            if (smallScreen.matches) {
                button.classList.remove("active");
            } 
            else {
                button.classList.add("active");
            }
        });
        smallArrows.forEach(function(button2){
            if (smallScreen.matches) {
                button2.classList.add("active");
            }
            else {
                button2.classList.remove("active");
            }
        });
    }

});