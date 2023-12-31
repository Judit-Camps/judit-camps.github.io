// Javascript

// Make elements appear when scrollint
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
    });
});

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el) => observer.observe(el));

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// Hide header when scrolling down
const nav = document.querySelector("header");
var lastScrollPos = 0;

window.addEventListener("scroll", () => {
    var scrollTop = window.scrollY;
    if (scrollTop == 0) {
        nav.style.transform = "translateY(0)";
    } else if (scrollTop > lastScrollPos) {
        nav.style.transition = "all .5s ease";
        nav.style.transform = "translateY(-100%)";
    } else {
        nav.style.transition = "all .6s ease";
        nav.style.transform = "translateY(0)";
    }

    lastScrollPos = scrollTop;
})