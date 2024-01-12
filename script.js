/* Event Listeners */

document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in class to logo, headshot/stars, and accordion-container after 1 second
  setTimeout(function () {
    document.querySelector(".logo-container").classList.add("fade-in");
    document.querySelector(".img-container").classList.add("fade-in");
    document.querySelector(".accordion-container").classList.add("fade-in");
  }, 1000);

  var isModalOpen = false; // Track if any modal is open

  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      // Check if any modal is open, if yes, do not toggle collapsibles
      if (isModalOpen) {
        return;
      }

      // Close other collapsibles
      collapsibles.forEach(function (otherCollapsible) {
        if (otherCollapsible !== collapsible) {
          otherCollapsible.classList.remove("active");
          var otherContent = otherCollapsible.nextElementSibling;
          otherContent.style.maxHeight = null;
        }
      });

      toggleAccordion(this);
    });

    collapsible.addEventListener("mouseenter", function () {
      // Add a class to disable hover effect when a modal is open
      if (isModalOpen) {
        this.classList.add("disable-hover");
      }
    });

    collapsible.addEventListener("mouseleave", function () {
      // Remove the class to enable hover effect
      this.classList.remove("disable-hover");
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-btn")) {
      var modalId = event.target.getAttribute("data-modal-id");
      openModal(modalId);
    }

    if (event.target.classList.contains("close")) {
      var modalId = event.target.closest(".modal").id;
      closeModal(modalId);
    }

    if (event.target.classList.contains("modal")) {
      closeModal(event.target.id);
    }

    // Close modal when clicking anywhere outside the modal
    if (
      !event.target.closest(".modal") &&
      !event.target.classList.contains("modal-btn")
    ) {
      if (isModalOpen) {
        var openModals = document.querySelectorAll(".modal");
        openModals.forEach(function (modal) {
          modal.classList.remove("open");
          setTimeout(function () {
            modal.style.display = "none";
            isModalOpen = false; // Reset modal open status
          }, 500); // Adjust the delay to match the transition duration
        });
      }
    }
  });

  // Open modal function
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("open");
      isModalOpen = true; // Set modal open status
    }, 50); // Delay to ensure smooth transition
  }

  // Close modal function
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove("open");
    setTimeout(function () {
      modal.style.display = "none";
      isModalOpen = false; // Reset modal open status
    }, 500); // Adjust the delay to match the transition duration
  }

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
