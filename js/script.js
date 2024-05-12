const navSticky = document.querySelector("nav");
let lastScrollPosition = window.scrollY;

function prueba() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        navSticky.classList.add("hidden");
    } else {
        navSticky.classList.remove("hidden");
    }
    lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", prueba);