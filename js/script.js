document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener("click", function () {
            const isExpanded = navbarCollapse.classList.contains("show");
            
            if (isExpanded) {
                navbarCollapse.classList.remove("show");
            } else {
                navbarCollapse.classList.add("show");
            }
        });
    }
    
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });
});