document.addEventListener("DOMContentLoaded", function () {
  // Highlight the active navbar link
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Smooth Scrolling Effect for Navigation Links
  document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      if (this.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjusting for fixed navbar
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Animate Elements on Scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(".box, .offer-item");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight - 100) {
        el.classList.add("animate");
      }
    });
  }

  // Trigger animations when scrolling
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load
});
