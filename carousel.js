document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const bars = document.querySelectorAll('.carousel-bar');
    let currentIndex = 0;
    const intervalTime = 3000;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        bars.forEach((bar, i) => {
            bar.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    // Auto-slide every 3 seconds
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Start auto-sliding
    let slideInterval = setInterval(autoSlide, intervalTime);

    // Handle navigation bar clicks
    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            clearInterval(slideInterval); // Pause auto-slide
            const index = parseInt(bar.dataset.index);
            showSlide(index);
            slideInterval = setInterval(autoSlide, intervalTime); // Resume auto-slide
        });
    });
});