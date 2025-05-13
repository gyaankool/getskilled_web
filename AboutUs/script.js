document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});

function toggleMobileMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function toggleMobileDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";
}

// document.addEventListener("DOMContentLoaded", function () {
//     // Animate elements when they come into view
//     const observerOptions = {
//         threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = "1";
//                 entry.target.style.transform = "translateY(0)";
//             }
//         });
//     }, observerOptions);

//     // Elements to animate
//     const animatedElements = document.querySelectorAll(
//         ".story-content, .story-image, .feature-card"
//     );

//     // Set initial styles and observe
//     animatedElements.forEach((el) => {
//         el.style.opacity = "0";
//         el.style.transform = "translateY(20px)";
//         el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
//         observer.observe(el);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("faculty-carousel");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Calculate the width to scroll (one card width + gap)
    const cardWidth = document.querySelector(".faculty-card").offsetWidth;
    const scrollAmount = cardWidth + 24; // 24px is the gap between cards

    // Scroll functions
    nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Optional: Check if at beginning or end to disable buttons
    carousel.addEventListener("scroll", function () {
        // Enable/disable prev button based on scroll position
        prevBtn.disabled = carousel.scrollLeft <= 0;

        // Enable/disable next button based on scroll position
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        nextBtn.disabled = carousel.scrollLeft >= maxScrollLeft - 1;

        // Update button styles based on disabled state
        prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
        nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
    });

    // Initialize button states
    prevBtn.disabled = true;
    prevBtn.style.opacity = "0.5";
});
document.addEventListener("DOMContentLoaded", function () {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll(".sp-faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".sp-faq-question");

        question.addEventListener("click", () => {
            // Close all other items
            faqItems.forEach((otherItem) => {
                if (
                    otherItem !== item &&
                    otherItem.classList.contains("active")
                ) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle current item
            item.classList.toggle("active");
        });
    });

    // Testimonial Horizontal Scroll Navigation
    const testimonialCards = document.querySelector(".sp-testimonial-cards");
    const arrowButton = document.querySelector(".sp-testimonial-arrow");

    if (arrowButton && testimonialCards) {
        arrowButton.addEventListener("click", () => {
            testimonialCards.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        });
    }
});
