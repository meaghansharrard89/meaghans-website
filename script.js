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

  /* Contact Form */

  var contactFormButton = document.querySelector("#contactForm .submit");
  var contactForm = document.querySelector("#contactForm form");

  contactFormButton.addEventListener("click", function () {
    // Reset the form fields when the contact form button is clicked
    contactForm.reset();

    // Explicitly reset each form field
    var formFields = contactForm.querySelectorAll("input, textarea");
    formFields.forEach(function (field) {
      field.value = "";
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
