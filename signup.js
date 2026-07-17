// ============================
// Mobile Menu
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ============================
// Show / Hide Password
// ============================

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const icon = button.querySelector("i");

    if (input.type === "password") {
      input.type = "text";

      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";

      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// ============================
// Form Validation
// ============================

const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert("Account Created Successfully!");

  form.reset();
});
