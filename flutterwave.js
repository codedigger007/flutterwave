let isDivShown = false;
let divToShows = document.getElementsByClassName("small-nav")[0]
let mainTag = document.getElementsByTagName("main")
let spanToClick = document.getElementsByClassName("ham")[0]
let counter = 1;
let card = document.getElementsByClassName("card");

setInterval(() => {
    changeCard()
    }, 3000)
function changeCard() {
    if(counter > 3) {
        counter = 0
    }
    let card = document.getElementsByClassName("card");
    if(window.innerWidth > 1000) {
    if(counter == 0) {
        card[0].style.zIndex = "100";
        card[0].style.width = "40%";
        card[0].style.top = "0";
        card[1].style.zIndex = "50";
        card[1].style.width = "35%";
        card[1].style.top = "5%";
        card[2].style.zIndex = "20";
        card[2].style.width = "30%";
        card[2].style.top = "10%";
        card[3].style.zIndex = "10";
        card[3].style.width = "25%";
        card[3].style.top = "15%";
    } else if(counter == 1) {
        card[1].style.zIndex = "100";
        card[1].style.width = "40%";
        card[1].style.top = "0";
        card[2].style.zIndex = "50";
        card[2].style.width = "35%";
        card[2].style.top = "5%";
        card[3].style.zIndex = "20";
        card[3].style.width = "30%";
        card[3].style.top = "10%";
        card[0].style.zIndex = "10";
        card[0].style.width = "25%";
        card[0].style.top = "15%";
    } else if(counter == 2) {
        card[2].style.zIndex = "100";
        card[2].style.width = "40%";
        card[2].style.top = "0";
        card[3].style.zIndex = "50";
        card[3].style.width = "35%";
        card[3].style.top = "5%";
        card[0].style.zIndex = "20";
        card[0].style.width = "30%";
        card[0].style.top = "10%";
        card[1].style.zIndex = "10";
        card[1].style.width = "25%";
        card[1].style.top = "15%";
    }  else if(counter == 3) {
        card[3].style.zIndex = "100";
        card[3].style.width = "40%";
        card[3].style.top = "0";
        card[0].style.zIndex = "50";
        card[0].style.width = "35%";
        card[0].style.top = "5%";
        card[1].style.zIndex = "20";
        card[1].style.width = "30%";
        card[1].style.top = "10%";
        card[2].style.zIndex = "10";
        card[2].style.width = "25%";
        card[2].style.top = "15%";
    }
} else if(window.innerWidth <= 1000) {
    if(counter == 0) {
        card[0].style.zIndex = "100";
        card[0].style.width = "90%";
        card[0].style.top = "0";
        card[1].style.zIndex = "50";
        card[1].style.width = "80%";
        card[1].style.top = "3%";
        card[2].style.zIndex = "20";
        card[2].style.width = "70%";
        card[2].style.top = "6%";
        card[3].style.zIndex = "10";
        card[3].style.width = "60%";
        card[3].style.top = "9%";
    } else if(counter == 1) {
        card[1].style.zIndex = "100";
        card[1].style.width = "90%";
        card[1].style.top = "0";
        card[2].style.zIndex = "50";
        card[2].style.width = "80%";
        card[2].style.top = "3%";
        card[3].style.zIndex = "20";
        card[3].style.width = "70%";
        card[3].style.top = "6%";
        card[0].style.zIndex = "10";
        card[0].style.width = "60%";
        card[0].style.top = "9%";
    } else if(counter == 2) {
        card[2].style.zIndex = "100";
        card[2].style.width = "90%";
        card[2].style.top = "0";
        card[3].style.zIndex = "50";
        card[3].style.width = "80%";
        card[3].style.top = "3%";
        card[0].style.zIndex = "20";
        card[0].style.width = "70%";
        card[0].style.top = "6%";
        card[1].style.zIndex = "10";
        card[1].style.width = "60%";
        card[1].style.top = "9%";
    }  else if(counter == 3) {
        card[3].style.zIndex = "100";
        card[3].style.width = "90%";
        card[3].style.top = "0";
        card[0].style.zIndex = "50";
        card[0].style.width = "80%";
        card[0].style.top = "3%";
        card[1].style.zIndex = "20";
        card[1].style.width = "70%";
        card[1].style.top = "6%";
        card[2].style.zIndex = "10";
        card[2].style.width = "60%";
        card[2].style.top = "9%";
    }
}
    counter++
}
setInterval(() => {
    if(window.innerWidth > 1000 && isDivShown == true) {
        divToShows.style.display = "none"
        mainTag[0].style.display = "block"
        spanToClick.classList.remove("fa-xmark")
        spanToClick.classList.add("fa-bars")
    }

}, 500);
    


window.onmouseover = (event) => {
    let listToShow = document.getElementsByClassName("top-list")
    let listHolder = document.getElementsByClassName("top-nav-list")
    if(listHolder[0].contains(event.target) || listToShow[0].contains(event.target)) {
        listToShow[0].style.display = "flex"
        listToShow[1].style.display = "none"
    } else if(listHolder[1].contains(event.target)) {
        listToShow[1].style.display = "flex"
        listToShow[0].style.display = "none"
    } else {
        listToShow[1].style.display = "none"
        listToShow[0].style.display = "none"
    }
}

function showList() {
    isDivShown = !isDivShown;
    let spanToClick = document.getElementsByClassName("ham")[0]
    let divToShow = document.getElementsByClassName("small-nav")[0]
    if(isDivShown && window.innerWidth < 1000) {
        spanToClick.classList.remove("fa-bars")
        spanToClick.classList.add("fa-xmark")
        mainTag[0].style.display = "none"
        divToShow.style.display = "block"
    } else {
    spanToClick.classList.remove("fa-xmark")
    spanToClick.classList.add("fa-bars")
    divToShow.style.display = "none"
    mainTag[0].style.display = "block"
    }
}
const words = document.getElementsByClassName("words")
words[0].addEventListener("mouseenter", () => {
    window.innerWidth > 1000 ?
        words[1].style.left = "50%" :  words[1].style.left = "0%"
    
})
words[0].addEventListener("mouseleave", () => {
    window.innerWidth > 1000 ?
        words[1].style.left = "25%" :  words[1].style.left = "0%"
})
words[1].addEventListener("mouseenter", () => {
    words[1].style.left = "0%"
})
words[1].addEventListener("mouseleave", () => {
    window.innerWidth > 1000 ?
    words[1].style.left = "25%" :  words[1].style.left = "0%"
})