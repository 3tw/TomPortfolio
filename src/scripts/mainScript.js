//buttons listener

document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll(".tabContent");

    document.addEventListener("click", function(e) {
        if (e.target.tagName == "BUTTON") {
            const targetContent = document.querySelector(e.target.dataset.target);
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
    const smallScreen = window.matchMedia("(max-width: 800px")

    smallScreen.addListener(function() {
        const bigArrows = document.querySelectorAll(".bigScreenArrow");
        const smallArrows = document.querySelectorAll(".smallScreenArrow")
        if (smallScreen.matches) {
            bigArrows.forEach(function(button) {
                button.classList.remove("active")
            });
            smallArrows.forEach(function(button2) {
                button2.classList.add("active")
                console.log(button2)
            })
        } else {
            bigArrows.forEach(function(button) {
                button.classList.add("active")
            });
            smallArrows.forEach(function(button2) {
                button2.classList.remove("active")
                console.log(button2)

            })
        }
    });




});
