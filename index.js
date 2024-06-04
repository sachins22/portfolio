document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        // sticky navbar on scroll script
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // scroll-up button show/hide script
        var scrollUpBtn = document.querySelector(".scroll-up-btn");
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // slide-up script
    var scrollUpBtn = document.querySelector(".scroll-up-btn");
    scrollUpBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    var menuLinks = document.querySelectorAll(".navbar .menu li a");
    menuLinks.forEach(function(link) {
        // Smooth scroll on Menu Items click
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var target = document.querySelector(targetId);
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle Navbar
    var menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", function() {
        var menu = document.querySelector(".navbar .menu");
        menu.classList.toggle("active");
        var menuIcon = document.querySelector(".menu-btn i");
        menuIcon.classList.toggle("active");
    });

    // Typing Text Animation
    var typed1 = new Typed(".typing", {
        strings: [
            "Fullstack App Developer",
            "Application Developer",
            "JavaScript Developer",
            "Node Js Developer",
            "React-Native Developer",
            "And Work With MongoDB  ",
            "Writer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: [
            "Fullstack App Developer",
            "Application Developer",
            "JavaScript Developer",
            "Node Js Developer",
            "React-Native Developer",
            "And Work With MongoDB   ",
            "Writer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    var owlCarousel = document.querySelector(".carousel");
    if (owlCarousel) {
        new OwlCarousel({
            items: 3,
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
});
