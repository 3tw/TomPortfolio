//buttons listener

document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll(".tabContent");

    document.addEventListener("click", function(e) {
        if (e.target.tagName == "BUTTON") {
            const targetContent = document.querySelector(e.target.dataset.target);
            tabContents.forEach(function(content) {
                if (content == targetContent) {
                    let targetId = targetContent.getAttribute("id")
                        content.classList.add("active");
                } 
                else {
                    content.classList.remove("active"); 
                }
            });
        }
    });


});