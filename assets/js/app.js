// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
        document.getElementById("preloder").classList.add("hidden");
        document.body.classList.remove("overflow-hidden")
    }, 3000)
    // back to top
function backtotop() {
    window.scroll(0, 0)
}
window.addEventListener("scroll", function() {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 250) {
        backtotop.style.display = "block"
    } else {
        backtotop.style.display = "none"
    }
});
// nav varible
let view = document.querySelector(".view");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
// navbar
function navbar() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("hidden");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

function navbar2() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("hidden");
    document.querySelector("body").classList.remove("overflow-hidden");
}