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

/* Contact Form */

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstname = document.getElementById("fname");
  let lastname = document.getElementById("lname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  if (
    firstname.value == "" ||
    lastname.value == "" ||
    email.value == "" ||
    message.value == ""
  ) {
    console.log(alert("Please fill out all the fields!"));
  } else {
    console.log(alert("This form has been successfully submitted!"));
  }
});
