let menu = document.getElementById("menu");
    let menuButton = document.getElementById("menu-button")
    function openMenu() {
        if (menu.style.display == "block") {
            menu.style.display = "none"
        }
        else {
            menu.style.display = "block"
        }
    };

    menuButton.addEventListener("click", openMenu)
