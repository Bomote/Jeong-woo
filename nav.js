const primaryNav = document.querySelector('.navbar');
const NavToggle = document.querySelector(".mobile-nav-toggle")

NavToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible",true);
        NavToggle.setAttribute("aria-expanded",true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible",false)
        NavToggle.setAttribute("aria-expanded",false);
    }
})