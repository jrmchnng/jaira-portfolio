"use strict";

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector("#contactForm");

const contactFormStatus =
    document.querySelector("#contactFormStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            if (contactFormStatus) {

                contactFormStatus.textContent =
                    "The contact form is currently being set up. Please contact me directly by email.";

            }

        }
    );

}