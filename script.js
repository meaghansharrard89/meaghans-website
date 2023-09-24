var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//contact form
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstname = document.getElementById("fname");
    let lastname = document.getElementById("lname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (firstname.value == "" || lastname.value == "" || email.value == "" || message.value == "") {
        console.log(alert("Please fill out all the fields!"));
    } else {
        console.log(alert("This form has been successfully submitted!"));
    }
});