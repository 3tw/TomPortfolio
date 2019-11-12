function open(event, index) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    tabLinks = documents.getElementsByClassName("tabLinks");
    for (i=0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    
    document.getElementById(index).style.display = "contents";
    event.currentTarget.className += " active";
    

}