"use strict";

/* =========================================================
   TOOLS TAB SYSTEM
========================================================= */

const toolsSection =
    document.querySelector(".tools-section");


if (toolsSection) {

    const toolsTabs =
        toolsSection.querySelectorAll(".tools-tab");

    const toolsPanels =
        toolsSection.querySelectorAll(".tools-panel");


    function activateToolsCategory(selectedTab) {

        const selectedCategory =
            selectedTab.dataset.toolCategory;


        /* Update buttons */

        toolsTabs.forEach((tab) => {

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

        toolsPanels.forEach((panel) => {

            const shouldShow =
                panel.dataset.toolsPanel === selectedCategory;

            panel.hidden = !shouldShow;

            panel.classList.toggle(
                "active",
                shouldShow
            );

        });

    }


    /* CLICK */

    toolsTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            activateToolsCategory(tab);

        });

    });


    /* KEYBOARD */

    toolsTabs.forEach((tab, index) => {

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
                        toolsTabs.length
                    ) %
                    toolsTabs.length;


                const nextTab =
                    toolsTabs[nextIndex];


                nextTab.focus();

                activateToolsCategory(nextTab);


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
        toolsSection.querySelector(".tools-tab.active")
        || toolsTabs[0];


    if (initialTab) {

        activateToolsCategory(initialTab);

    }

}