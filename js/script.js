// Step 4: Dark Mode Toggle Button
// Give the button an id. Find it, listen for click, then document.body.classList.toggle("dark")
const themeBtn = document.getElementById("theme-btn");
const btnIcon = themeBtn.querySelector(".btn-icon");
const btnText = themeBtn.querySelector(".btn-text");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Update button icon and label according to current mode
  if (document.body.classList.contains("dark")) {
    btnIcon.textContent = "🌻";
    btnText.textContent = "Light Mode";
  } else {
    btnIcon.textContent = "🌙";
    btnText.textContent = "Dark Mode";
  }
});

// Section 5 Bonus:
// 1. The form stays on the page (e.preventDefault prevents page reload).
// 2. An empty email or name is rejected.
// 3. A line that says hello with the name the visitor types.
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const greetingMessage = document.getElementById("greeting-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Keep form on the page without reloading

  const enteredName = nameInput.value.trim();
  const enteredEmail = emailInput.value.trim();

  // Validate that neither field is empty
  if (!enteredName || !enteredEmail) {
    greetingMessage.classList.add("error");
    greetingMessage.textContent = "Please fill in both your name and email.";
    return;
  }

  // Display greeting message with the name the visitor entered
  greetingMessage.classList.remove("error");
  greetingMessage.textContent = `Hello, ${enteredName}! Thank you for reaching out.`;

  // Reset form inputs
  contactForm.reset();
});
