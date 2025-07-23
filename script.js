// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;
const intervalTime = 5000; // 5 seconds

function showTestimonial(index) {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentTestimonial = index;
}

function nextTestimonial() {
  let nextIndex = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

// Auto rotate testimonials
let testimonialInterval = setInterval(nextTestimonial, intervalTime);

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(testimonialInterval);
    showTestimonial(index);
    testimonialInterval = setInterval(nextTestimonial, intervalTime);
  });
});