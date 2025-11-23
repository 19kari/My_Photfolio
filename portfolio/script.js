// Small JS for menu + year
document.getElementById("year").textContent = new Date().getFullYear();
const btn = document.querySelector(".menu-btn");
btn.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  if (nav.style.display === "flex") nav.style.display = "";
  else nav.style.display = "flex";
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href.length > 1) {
      e.preventDefault();
      document
        .querySelector(href)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      // close mobile nav
      const nav = document.querySelector(".nav-links");
      if (window.innerWidth <= 900) nav.style.display = "";
    }
  });
});

//     <!--
//     Notes:
//     - Replace avatar with a real <img> and add alt text for accessibility.
//     - Hook the contact form to Formspree or your backend to receive messages.
//     - Replace the "Download CV" link with the uploaded PDF path if you host it.
//   -->
