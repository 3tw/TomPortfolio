//check if doc is loaded
document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll(".tab-content");

    document.addEventListener("click", function(e) {
        //button listener
        if (e.target.classList.contains("button")) {
            const targetContent = document.querySelector(e.target.dataset.target);
            const scrollDiv = document.querySelectorAll(".scroll");

            //scroll text back to the top
            scrollDiv.forEach (function(div){
                div.scrollTop = 0;
            });
            
            //display hidden tabs
            tabContents.forEach(function(content) {
                if (content == targetContent) {
                    content.classList.add("active");
                } 
                else {
                    content.classList.remove("active"); 
                }
            });
        }
    
    });

    //media queries
    if (matchMedia){
        const smallScreen = window.matchMedia("(max-width: 830px)");
        const bigScreen = window.matchMedia("(min-width: 830px)");


        smallScreen.addListener(moveArrows);
        moveArrows(smallScreen);
    }

    // move arrows
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