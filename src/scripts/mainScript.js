//buttons listener

document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll(".tabContent");

    document.addEventListener("click", function(e) {
        if (e.target.tagName == "BUTTON") {
            const targetContent = document.querySelector(e.target.dataset.target);
            const scrollDiv = document.querySelectorAll(".scroll");

            scrollDiv.forEach (function(div){
                div.scrollTop = 0;
            });
            
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