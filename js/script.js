// Step 4: Dark mode toggle button
// Give the button an id. Find it, listen for click, then document.body.classList.toggle("dark")
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Section 5 Bonus:
// 1. The form stays on the page (prevent page refresh).
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
    greetingMessage.textContent = "Please provide both your name and email.";
    return;
  }

  // Display greeting with the name the visitor typed
  greetingMessage.classList.remove("error");
  greetingMessage.textContent = `Hello, ${enteredName}! Thank you for leaving your message.`;

  // Reset form inputs
  contactForm.reset();
});
