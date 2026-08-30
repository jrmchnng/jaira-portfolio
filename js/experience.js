"use strict";

/* =========================================================
   EXPERIENCE ACCORDION
========================================================= */

const experienceSection =
    document.querySelector(".experience-section");


if (experienceSection) {

    const accordionItems =
        experienceSection.querySelectorAll(
            ".experience-accordion-item"
        );


    accordionItems.forEach((item) => {

        const button =
            item.querySelector(
                ".experience-accordion-button"
            );

        const panel =
            item.querySelector(
                ".experience-accordion-panel"
            );


        if (!button || !panel) {
            return;
        }


        button.addEventListener("click", () => {

            const isAlreadyOpen =
                button.getAttribute(
                    "aria-expanded"
                ) === "true";


            /*
             * Close every accordion first.
             */

            accordionItems.forEach((otherItem) => {

                const otherButton =
                    otherItem.querySelector(
                        ".experience-accordion-button"
                    );

                const otherPanel =
                    otherItem.querySelector(
                        ".experience-accordion-panel"
                    );


                if (!otherButton || !otherPanel) {
                    return;
                }


                otherButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                otherPanel.hidden = true;

                otherItem.classList.remove(
                    "active"
                );

            });


            /*
             * If the clicked accordion wasn't
             * already open, open it.
             */

            if (!isAlreadyOpen) {

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

                panel.hidden = false;

                item.classList.add(
                    "active"
                );

            }

        });

    });

}