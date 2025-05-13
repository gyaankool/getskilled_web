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
document.addEventListener("DOMContentLoaded", function () {
    // Tab switching functionality
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Here you would typically load different course data based on the selected tab
            // For this demo, we're just changing the UI state
        });
    });

    // Load more button functionality
    const loadMoreBtn = document.querySelectorAll(".load-more .btn");

    loadMoreBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            // Here you would typically load more courses
            // For this demo, we can show a loading state
            this.innerHTML = 'Loading... <span class="icon">↻</span>';

            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = this.textContent.includes("Load More")
                    ? 'Load More <span class="icon">→</span>'
                    : 'Explore All <span class="icon">→</span>';
            }, 2000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card-features");

    function checkVisibility() {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                card.style.opacity = "1";
            }
        });
    }

    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transition =
            "opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease";
    });

    window.addEventListener("scroll", checkVisibility);
    setTimeout(checkVisibility, 100);
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
