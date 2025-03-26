document.addEventListener("DOMContentLoaded", function () {
  // Select the existing menu toggle button
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Search Filtering
  const searchInput = document.querySelector(".srch");
  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".coffee-item").forEach((item) => {
      const name = item.querySelector(".name").textContent.toLowerCase();
      item.style.display = name.includes(filter) ? "block" : "none";
    });
  });

  // Smooth Scroll Effect
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
