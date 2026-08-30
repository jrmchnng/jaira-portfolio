"use strict";

/* =========================================================
   SELECT ELEMENTS
========================================================= */

const navigationLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const revealElements = document.querySelectorAll(".reveal");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const sidebarNavigation = document.getElementById("sidebarNavigation");
const scrollProgressBar = document.getElementById("scrollProgressBar");


/* =========================================================
   MOBILE MENU
========================================================= */

function openMobileMenu() {
    sidebarNavigation.classList.add("open");
    mobileMenuButton.classList.add("active");

    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    document.body.classList.add("menu-open");
}


function closeMobileMenu() {
    sidebarNavigation.classList.remove("open");
    mobileMenuButton.classList.remove("active");

    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    document.body.classList.remove("menu-open");
}


function toggleMobileMenu() {
    const menuIsOpen = sidebarNavigation.classList.contains("open");

    if (menuIsOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


mobileMenuButton.addEventListener("click", toggleMobileMenu);


/* =========================================================
   SMOOTH SECTION NAVIGATION
========================================================= */

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        if (window.innerWidth <= 900) {
            closeMobileMenu();
        }
    });
});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sectionObserverOptions = {
    root: null,
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0
};


const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        const activeSectionId = entry.target.id;

        navigationLinks.forEach((link) => {
            const linkSection = link.dataset.section;

            link.classList.toggle(
                "active",
                linkSection === activeSectionId
            );
        });
    });
}, sectionObserverOptions);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealObserverOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.12
};


const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add("visible");

        /*
         * Stop observing after the animation runs once.
         * This keeps the page lightweight.
         */
        observer.unobserve(entry.target);
    });
}, revealObserverOptions);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   PAGE SCROLL PROGRESS
========================================================= */

function updateScrollProgress() {
    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (pageHeight <= 0) {
        scrollProgressBar.style.width = "0%";
        return;
    }

    const scrollPercentage = (scrollTop / pageHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercentage}%`;
}


window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

updateScrollProgress();


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {
    const menuIsOpen = sidebarNavigation.classList.contains("open");

    if (!menuIsOpen || window.innerWidth > 900) {
        return;
    }

    const clickedInsideSidebar =
        sidebarNavigation.contains(event.target);

    const clickedMenuButton =
        mobileMenuButton.contains(event.target);

    if (!clickedInsideSidebar && !clickedMenuButton) {
        closeMobileMenu();
    }
});


/* =========================================================
   CLOSE MOBILE MENU WITH ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});


/* =========================================================
   RESET MENU WHEN WINDOW IS RESIZED
========================================================= */

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

/*==========================================
BACK TO TOP BUTTON
==========================================*/

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

