// Waits for the webpage to fully load first
// before running the slideshow code
document.addEventListener("DOMContentLoaded", function() {

    // Keeps track of the current slide number
    let currentIdx = 0;

    // Collects all slideshow images
    const slides = document.getElementsByClassName("slide");

    // Collects all navigation dots
    const dots = document.getElementsByClassName("dot");

    // Moves the slideshow forward or backward
    window.moveSlide = function(n) {
        showSlide(currentIdx += n);
    };

    // Lets users jump directly to a slide
    // when clicking the navigation dots
    window.setSlide = function(n) {
        showSlide(currentIdx = n);
    };

    // Main slideshow function
    function showSlide(n) {

        // Loops back to first slide
        // after reaching the end
        if (n >= slides.length) {
            currentIdx = 0;
        }

        // Goes to last slide if user moves backward
        // from the first image
        if (n < 0) {
            currentIdx = slides.length - 1;
        }

        // Hides every slide first
        // and removes active dots
        for (let i = 0; i < slides.length; i++) {

            slides[i].classList.add("hidden");

            if (dots[i]) {
                dots[i].classList.remove("active");
            }
        }

        // Shows the selected slide
        slides[currentIdx].classList.remove("hidden");

        // Highlights the matching dot
        if (dots[currentIdx]) {
            dots[currentIdx].classList.add("active");
        }
    }

    // Automatically changes slides every 6 seconds
    setInterval(() => {
        window.moveSlide(1);
    }, 6000);

});