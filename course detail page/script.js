document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion-item');
  
    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
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
  });