let hambElem = document.getElementById ("hamburger");
hambElem.addEventListener("click", toggleMenu);

function toggleMenu () {
    let mobileMenuElem = document.getElementById ("mob-menu");
    mobileMenuElem.classList.toggle("show-menu");
    mobileMenuElem.style.backgroundColor = "rgba(33, 72, 131, 0.644);";
}

let displaybtn = document.getElementById ( "display-btn");
displaybtn.addEventListener ("click", showLogin)

function showLogin () {
    let overlayElem = document.getElementById ("overlay");
    overlayElem.style.display = "block";
}
let closeIcon = document.getElementById("close");

function closeform() {
    let overlayElem = document.getElementById ("overlay");
    overlayElem.style.display = "none";
}