document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if all fields are filled
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Proceed with form submission or AJAX request here
    console.log("Form submitted:", { name, email, message });
    // Reset the form after submission
    this.reset();
  });
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
