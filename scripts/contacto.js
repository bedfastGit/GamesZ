document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }

    function prevTestimonial() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial();
    }


    setInterval(nextTestimonial, 3000);
});