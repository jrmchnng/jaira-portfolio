"use strict";

/* =========================================================
   SERVICES TAB SYSTEM
========================================================= */

const servicesSection =
    document.querySelector(".services-section");


if (servicesSection) {

    const serviceTabs =
        servicesSection.querySelectorAll(".service-tab");

    const servicePanels =
        servicesSection.querySelectorAll(".service-panel");

    const activeServiceName =
        servicesSection.querySelector("#activeServiceName");


    const serviceNames = {

        wordpress: "WordPress Website Support",

        shopify: "Shopify & Product Management",

        seo: "SEO Support",

        content: "Content & Blog Management",

        design: "Graphic Design & Social Content",

        video: "Video Editing",

        admin: "Administrative Support",

        qa: "Website & Digital QA"

    };


    function activateService(selectedTab) {

        const selectedService =
            selectedTab.dataset.service;


        /* Update tabs */

        serviceTabs.forEach((tab) => {

            const isActive =
                tab === selectedTab;

            tab.classList.toggle(
                "active",
                isActive
            );

            tab.setAttribute(
                "aria-selected",
                isActive ? "true" : "false"
            );

        });


        /* Update panels */

        servicePanels.forEach((panel) => {

            const shouldShow =
                panel.dataset.panel === selectedService;

            panel.hidden = !shouldShow;

            panel.classList.toggle(
                "active",
                shouldShow
            );

        });


        /* Update text indicator */

        if (activeServiceName) {

            activeServiceName.textContent =
                serviceNames[selectedService] ||
                selectedService;

        }

    }


    /* CLICK EVENTS */

    serviceTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            activateService(tab);

        });

    });


    /* KEYBOARD SUPPORT */

    serviceTabs.forEach((tab, index) => {

        tab.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key !== "ArrowRight" &&
                    event.key !== "ArrowLeft"
                ) {
                    return;
                }


                event.preventDefault();


                const direction =
                    event.key === "ArrowRight"
                        ? 1
                        : -1;


                const nextIndex =
                    (
                        index +
                        direction +
                        serviceTabs.length
                    ) %
                    serviceTabs.length;


                const nextTab =
                    serviceTabs[nextIndex];


                nextTab.focus();


                activateService(nextTab);


                nextTab.scrollIntoView({

                    behavior: "smooth",

                    block: "nearest",

                    inline: "center"

                });

            }

        );

    });


    /* INITIAL STATE */

    const initialTab =
        servicesSection.querySelector(
            ".service-tab.active"
        ) ||
        serviceTabs[0];


    if (initialTab) {

        activateService(initialTab);

    }

}