"use strict";

/* =========================================================
   PORTFOLIO PLACEHOLDER DATA
========================================================= */

const graphicGalleries = {
    "gallery-one": {
        title: "Social Media Designs",
        items: [
            {
                title: "Social Media Design One",
                description: "Temporary placeholder for your first social media design."
            },
            {
                title: "Social Media Design Two",
                description: "Temporary placeholder for your second social media design."
            },
            {
                title: "Social Media Design Three",
                description: "Temporary placeholder for your third social media design."
            },
            {
                title: "Social Media Design Four",
                description: "Temporary placeholder for your fourth social media design."
            },
            {
                title: "Social Media Design Five",
                description: "Temporary placeholder for your fifth social media design."
            },
            {
                title: "Social Media Design Six",
                description: "Temporary placeholder for your sixth social media design."
            }
        ]
    },

    "gallery-two": {
        title: "Promotional Graphics",
        items: [
            {
                title: "Promotional Graphic One",
                description: "Temporary placeholder for a promotional design."
            },
            {
                title: "Promotional Graphic Two",
                description: "Temporary placeholder for another campaign graphic."
            },
            {
                title: "Promotional Graphic Three",
                description: "Temporary placeholder for another marketing design."
            },
            {
                title: "Promotional Graphic Four",
                description: "Temporary placeholder for another service graphic."
            },
            {
                title: "Promotional Graphic Five",
                description: "Temporary placeholder for another promotional visual."
            }
        ]
    },

    "gallery-three": {
        title: "Personal Creative Work",
        items: [
            {
                title: "Creative Project One",
                description: "Temporary placeholder for a personal design project."
            },
            {
                title: "Creative Project Two",
                description: "Temporary placeholder for a creative experiment."
            },
            {
                title: "Creative Project Three",
                description: "Temporary placeholder for another original design."
            },
            {
                title: "Creative Project Four",
                description: "Temporary placeholder for another creative project."
            }
        ]
    }
};


const websiteProjects = {
    "website-one": {
        title: "Virtue Care LLC",

        address: "virtuecare.net",

        overview:
            "Virtue Care LLC provides assisted living and specialized care services in the Denver metropolitan area. I maintained and enhanced the website to improve its service content, organization, navigation, responsiveness, user experience, and search visibility.",

        contribution: [
            "Maintained and updated the WordPress website using Elementor",
            "Created and improved healthcare service pages",
            "Implemented on-page SEO improvements",
            "Improved website navigation and content organization",
            "Added and optimized relevant internal links",
            "Improved responsiveness across desktop, tablet, and mobile",
            "Performed content updates, testing, and quality assurance"
        ],

        tools: [
            "WordPress",
            "Elementor",
            "HTML",
            "CSS",
            "SEO",
            "AIOSEO"
        ],

        image: "assets/virtue-care.png",
        link: "https://virtuecare.net"
    },

    "website-two": {
        title: "Website Project Two",
        address: "project-two.com",
        overview:
            "Temporary overview for your second website project. Replace this with a concise project description.",
        contribution: [
            "Website redesign and page customization",
            "Mobile and tablet responsiveness",
            "Content formatting",
            "SEO metadata and internal links"
        ],
        tools: [
            "WordPress",
            "Elementor",
            "Canva",
            "Rank Math"
        ]
    },

    "website-three": {
        title: "Website Project Three",
        address: "project-three.com",
        overview:
            "Temporary overview for another website, landing page or personal development project.",
        contribution: [
            "Page layout development",
            "Custom styling",
            "Website maintenance",
            "Content updates and testing"
        ],
        tools: [
            "WordPress",
            "Beaver Builder",
            "HTML",
            "CSS"
        ]
    }
};


const videoProjects = {
    "video-one": {
        title: "Social Media Video One",
        type: "30-second informational slideshow",
        description:
            "Temporary description for your first social media video project."
    },

    "video-two": {
        title: "Social Media Video Two",
        type: "Short-form promotional video",
        description:
            "Temporary description for your second video-editing project."
    },

    "video-three": {
        title: "Promotional Video Three",
        type: "45-second promotional content",
        description:
            "Temporary description for another video or animated slideshow."
    }
};


/* =========================================================
   PORTFOLIO FILTERS
========================================================= */

const portfolioFilters =
    document.querySelectorAll(".portfolio-filter");

const portfolioCategoryBlocks =
    document.querySelectorAll(".portfolio-category-block");

const portfolioResultMessage =
    document.getElementById("portfolioResultMessage");


function filterPortfolio(category) {
    portfolioCategoryBlocks.forEach((block) => {
        const blockCategory =
            block.dataset.categorySection;

        const shouldShow =
            category === "all" ||
            blockCategory === category;

        block.classList.toggle(
            "category-hidden",
            !shouldShow
        );
    });

    const filterName =
        category === "all"
            ? "all project categories"
            : `${category} projects`;

    portfolioResultMessage.textContent =
        `Showing ${filterName}.`;
}


portfolioFilters.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter =
            button.dataset.filter;

        portfolioFilters.forEach((filterButton) => {
            const isActive =
                filterButton === button;

            filterButton.classList.toggle(
                "active",
                isActive
            );

            filterButton.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });

        filterPortfolio(selectedFilter);
    });
});


/* =========================================================
   MODAL UTILITIES
========================================================= */

const portfolioModals =
    document.querySelectorAll(".portfolio-modal");

let activePortfolioModal = null;
let previouslyFocusedElement = null;


function openPortfolioModal(modal) {
    previouslyFocusedElement =
        document.activeElement;

    activePortfolioModal = modal;

    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add(
        "portfolio-modal-active"
    );

    const closeButton =
        modal.querySelector(".modal-close-button");

    if (closeButton) {
        closeButton.focus();
    }
}


function closePortfolioModal(modal) {
    if (!modal) {
        return;
    }

    modal.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove(
        "portfolio-modal-active"
    );

    activePortfolioModal = null;

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
}


document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {
        element.addEventListener("click", () => {
            const modal =
                element.closest(".portfolio-modal");

            closePortfolioModal(modal);
        });
    });


/* =========================================================
   GRAPHIC GALLERY
========================================================= */

const galleryModal =
    document.getElementById("galleryModal");

const galleryModalTitle =
    document.getElementById("galleryModalTitle");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryImageTitle =
    document.getElementById("galleryImageTitle");

const galleryImageDescription =
    document.getElementById("galleryImageDescription");

const galleryPlaceholderNumber =
    document.getElementById("galleryPlaceholderNumber");

const galleryThumbnails =
    document.getElementById("galleryThumbnails");

const galleryImageButton =
    document.getElementById("galleryImageButton");

const galleryPrevious =
    document.getElementById("galleryPrevious");

const galleryNext =
    document.getElementById("galleryNext");

let activeGallery = null;
let activeGalleryIndex = 0;


function renderGallery() {
    if (!activeGallery) {
        return;
    }

    const currentItem =
        activeGallery.items[activeGalleryIndex];

    const itemNumber =
        String(activeGalleryIndex + 1)
            .padStart(2, "0");

    galleryModalTitle.textContent =
        activeGallery.title;

    galleryCounter.textContent =
        `${activeGalleryIndex + 1} of ${activeGallery.items.length}`;

    galleryImageTitle.textContent =
        currentItem.title;

    galleryImageDescription.textContent =
        currentItem.description;

    galleryPlaceholderNumber.textContent =
        itemNumber;

    galleryThumbnails.innerHTML = "";

    activeGallery.items.forEach((item, index) => {
        const thumbnail =
            document.createElement("button");

        thumbnail.type = "button";
        thumbnail.className = "gallery-thumbnail";
        thumbnail.textContent =
            String(index + 1).padStart(2, "0");

        thumbnail.setAttribute(
            "aria-label",
            `View ${item.title}`
        );

        if (index === activeGalleryIndex) {
            thumbnail.classList.add("active");
        }

        thumbnail.addEventListener("click", () => {
            activeGalleryIndex = index;
            renderGallery();
        });

        galleryThumbnails.appendChild(thumbnail);
    });
}


function showNextGalleryItem() {
    if (!activeGallery) {
        return;
    }

    activeGalleryIndex =
        (activeGalleryIndex + 1) %
        activeGallery.items.length;

    renderGallery();
}


function showPreviousGalleryItem() {
    if (!activeGallery) {
        return;
    }

    activeGalleryIndex =
        (
            activeGalleryIndex -
            1 +
            activeGallery.items.length
        ) %
        activeGallery.items.length;

    renderGallery();
}


document
    .querySelectorAll(".graphic-collection-button")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const galleryId =
                button.dataset.gallery;

            activeGallery =
                graphicGalleries[galleryId];

            activeGalleryIndex = 0;

            renderGallery();
            openPortfolioModal(galleryModal);
        });
    });


galleryNext.addEventListener(
    "click",
    showNextGalleryItem
);

galleryPrevious.addEventListener(
    "click",
    showPreviousGalleryItem
);

galleryImageButton.addEventListener(
    "click",
    showNextGalleryItem
);


/* =========================================================
   MOBILE SWIPE FOR GALLERY
========================================================= */

let galleryTouchStartX = 0;
let galleryTouchEndX = 0;


galleryImageButton.addEventListener(
    "touchstart",
    (event) => {
        galleryTouchStartX =
            event.changedTouches[0].screenX;
    },
    {
        passive: true
    }
);


galleryImageButton.addEventListener(
    "touchend",
    (event) => {
        galleryTouchEndX =
            event.changedTouches[0].screenX;

        const swipeDistance =
            galleryTouchEndX -
            galleryTouchStartX;

        if (Math.abs(swipeDistance) < 45) {
            return;
        }

        if (swipeDistance < 0) {
            showNextGalleryItem();
        } else {
            showPreviousGalleryItem();
        }
    },
    {
        passive: true
    }
);


/* =========================================================
   WEBSITE MODAL
========================================================= */

const websiteModal =
    document.getElementById("websiteModal");

const websiteModalTitle =
    document.getElementById("websiteModalTitle");

const websiteModalAddress =
    document.getElementById("websiteModalAddress");

const websiteModalOverview =
    document.getElementById("websiteModalOverview");

const websiteModalContribution =
    document.getElementById("websiteModalContribution");

const websiteModalTools =
    document.getElementById("websiteModalTools");

const websiteModalImage =
    document.getElementById("websiteModalImage");

const websiteModalLink =
    document.getElementById("websiteModalLink");


function openWebsiteProject(projectId) {
    const project =
        websiteProjects[projectId];

    if (!project) {
        return;
    }

    websiteModalTitle.textContent =
        project.title;

    websiteModalAddress.textContent =
        project.address;

    websiteModalOverview.textContent =
        project.overview;

    websiteModalContribution.innerHTML = "";

    project.contribution.forEach((item) => {
        const listItem =
            document.createElement("li");

        listItem.textContent = item;

        websiteModalContribution.appendChild(
            listItem
        );
    });

    websiteModalTools.innerHTML = "";

    project.tools.forEach((tool) => {
        const toolTag =
            document.createElement("span");

        toolTag.textContent = tool;

        websiteModalTools.appendChild(toolTag);
    });


    /* Update website screenshot */

    if (websiteModalImage) {
        if (project.image) {
            websiteModalImage.src =
                project.image;

            websiteModalImage.alt =
                `${project.title} website homepage preview`;

            websiteModalImage.style.display =
                "block";
        } else {
            websiteModalImage.removeAttribute(
                "src"
            );

            websiteModalImage.alt = "";

            websiteModalImage.style.display =
                "none";
        }
    }


    /* Update live website button */

    if (websiteModalLink) {
        if (project.link) {
            websiteModalLink.href =
                project.link;

            websiteModalLink.textContent =
                "Visit Live Website";

            websiteModalLink.classList.remove(
                "disabled-link"
            );

            websiteModalLink.removeAttribute(
                "aria-disabled"
            );

            websiteModalLink.removeAttribute(
                "tabindex"
            );

            websiteModalLink.setAttribute(
                "target",
                "_blank"
            );

            websiteModalLink.setAttribute(
                "rel",
                "noopener noreferrer"
            );
        } else {
            websiteModalLink.href = "#";

            websiteModalLink.textContent =
                "Live website coming soon";

            websiteModalLink.classList.add(
                "disabled-link"
            );

            websiteModalLink.setAttribute(
                "aria-disabled",
                "true"
            );

            websiteModalLink.setAttribute(
                "tabindex",
                "-1"
            );

            websiteModalLink.removeAttribute(
                "target"
            );

            websiteModalLink.removeAttribute(
                "rel"
            );
        }
    }

    openPortfolioModal(websiteModal);
}


/* Project Details buttons */

document
    .querySelectorAll(".website-details-button")
    .forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();

            openWebsiteProject(
                button.dataset.project
            );
        });
    });


/* Entire website cards */

document
    .querySelectorAll(".website-card")
    .forEach((card) => {
        const detailsButton =
            card.querySelector(
                ".website-details-button"
            );

        if (!detailsButton) {
            return;
        }

        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");

        card.addEventListener("click", (event) => {
            /*
             * Keep the live-site link working normally.
             */
            if (
                event.target.closest(
                    ".portfolio-icon-link"
                )
            ) {
                return;
            }

            openWebsiteProject(
                detailsButton.dataset.project
            );
        });

        card.addEventListener("keydown", (event) => {
            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }

            /*
             * Do not activate the card when a nested
             * link or button already has keyboard focus.
             */
            if (
                event.target.closest(
                    "a, button"
                )
            ) {
                return;
            }

            event.preventDefault();

            openWebsiteProject(
                detailsButton.dataset.project
            );
        });
    });


/* =========================================================
   VIDEO MODAL
========================================================= */

const videoModal =
    document.getElementById("videoModal");

const videoModalTitle =
    document.getElementById("videoModalTitle");

const videoModalType =
    document.getElementById("videoModalType");

const videoModalSubtitle =
    document.getElementById("videoModalSubtitle");

const videoModalText =
    document.getElementById("videoModalText");


document
    .querySelectorAll(".video-open-button")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const videoId =
                button.dataset.video;

            const project =
                videoProjects[videoId];

            if (!project) {
                return;
            }

            videoModalTitle.textContent =
                project.title;

            videoModalType.textContent =
                project.type;

            videoModalSubtitle.textContent =
                project.title;

            videoModalText.textContent =
                project.description;

            openPortfolioModal(videoModal);
        });
    });


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", (event) => {
    if (!activePortfolioModal) {
        return;
    }

    if (event.key === "Escape") {
        closePortfolioModal(activePortfolioModal);
        return;
    }

    if (
        activePortfolioModal === galleryModal &&
        event.key === "ArrowRight"
    ) {
        showNextGalleryItem();
    }

    if (
        activePortfolioModal === galleryModal &&
        event.key === "ArrowLeft"
    ) {
        showPreviousGalleryItem();
    }
});


/* =========================================================
   INITIAL FILTER STATE
========================================================= */

filterPortfolio("all");