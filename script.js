/* Event Listeners */

document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in class to logo, headshot/stars, and accordion-container after 1 second
  setTimeout(function () {
    document.querySelector(".logo-container").classList.add("fade-in");
    document.querySelector(".img-container").classList.add("fade-in");
    document.querySelector(".accordion-container").classList.add("fade-in");
  }, 1000);

  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      toggleAccordion(this);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Your form submission logic (e.g., using AJAX) goes here

      // Example: Logging form data to console
      console.log("Form submitted with data:", new FormData(contactForm));

      // Clear the form fields after submission
      contactForm.reset();
    });
  });

  /* Slow transition for accordion dropdowns */

  function toggleAccordion(button) {
    button.classList.toggle("active");
    var content = button.nextElementSibling;

    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;

      setTimeout(function () {
        content.style.overflow = "hidden";
      }, 500);
    }
  }
});
