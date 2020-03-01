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

});