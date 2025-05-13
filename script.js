document.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        if (toggle && toggle.contains(e.target)) {
            // Toggle the clicked dropdown
            dropdown.classList.toggle("show");
        } else {
            // Close all other dropdowns
            dropdown.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Category Tabs Functionality
    const tabs = document.querySelectorAll(".tab");
    const tabss = document.querySelectorAll(".category-tab");
    tabss.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabss.forEach((t) => t.classList.remove("active"));
            // Add active class to clicked tab
            tab.classList.add("active");
            // Here you can add logic to filter program cards based on category
            // For now, we'll just log the category
            console.log(`Selected category: ${tab.dataset.category}`);
        });
    });

    // When to make it sticky
    // Sticky Header Logic
    // Tabs functionality (for feature groups)

    const featureGroups = document.querySelectorAll(".feature-group");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active tab
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            // Show the correct feature points
            const target = tab.getAttribute("data-tab");
            featureGroups.forEach((group) => {
                if (group.id === target) {
                    group.classList.add("show");
                } else {
                    group.classList.remove("show");
                }
            });
        });
    });
    // Scroll functionality for cards
    const cardsContainer = document.getElementById("facultyCards");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    function updateArrows() {
        leftArrow.classList.toggle("hidden", cardsContainer.scrollLeft <= 0);
        const maxScroll =
            cardsContainer.scrollWidth - cardsContainer.clientWidth;
        rightArrow.classList.toggle(
            "hidden",
            cardsContainer.scrollLeft >= maxScroll - 5
        );
    }

    // Scroll buttons
    rightArrow.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
    });

    leftArrow.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Update arrow visibility after scroll
    cardsContainer.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    // Initial check
    updateArrows();

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

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


//crousel pf testimonial section




const testimonials = [
  {
    title: "Easy to Understand",
    text: "The platform has a clean and intuitive UI, making speaking practice seamless and effective. Its user-friendly design ensures a smooth experience, helping users improve their fluency and confidence. The structured approach enhances practice sessions, making them more engaging and productive.",
    name: "Amey Patil",
    role: "MBA Student at SP Jain",
    image: "assets/person1.jpg"
  },
  {
    title: "Easy to Understand",
    text: "The platform has a clean and intuitive UI, making speaking practice seamless and effective. Its user-friendly design ensures a smooth experience, helping users improve their fluency and confidence. The structured approach enhances practice sessions, making them more engaging and productive.",
    name: "Rohan Yadav",
    role: "Computer Science Undergrad",
    image: "assets/person1.jpg"
  },
  {
    title: "Easy to Understand",
    text: "The platform has a clean and intuitive UI, making speaking practice seamless and effective. Its user-friendly design ensures a smooth experience, helping users improve their fluency and confidence. The structured approach enhances practice sessions, making them more engaging and productive.",
    name: "Vivek Mishra",
    role: "MBA Student at SP Jain",
    image: "assets/person1.jpg"
  }
];

let currentIndex = 0;

function updateTestimonial(index) {
  const card = document.querySelector('.testimonial-card-interview');

  // Slide out left
  card.classList.remove('active-slide');
  card.classList.add('slide-out-left');

  setTimeout(() => {
    const t = testimonials[index];
    document.getElementById('testimonial-title').textContent = t.title;
    document.getElementById('testimonial-text').textContent = t.text;
    document.getElementById('testimonial-name').textContent = t.name;
    document.getElementById('testimonial-role').textContent = t.role;
    document.getElementById('testimonial-image').src = t.image;

    // Prepare to slide in right
    card.classList.remove('slide-out-left');
    card.classList.add('slide-in-right');

    void card.offsetWidth; // trigger reflow

    setTimeout(() => {
      card.classList.remove('slide-in-right');
      card.classList.add('active-slide');
    }, 20);

    // Update dots
    const dots = document.querySelectorAll('.dots.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }, 400); // duration matches CSS
}

// Arrow click handlers
document.getElementById('next-arrow').addEventListener('click', () => {
  let next = (currentIndex + 1) % testimonials.length;
  updateTestimonial(next);
});

document.getElementById('prev-arrow').addEventListener('click', () => {
  let prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(prev);
});

// Dot click handlers
document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (index !== currentIndex) {
      updateTestimonial(index);
    }
  });
});


