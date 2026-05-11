const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  let isValid = true;

  // Username regex
  const userRegex = /^[A-Za-z]{3,10}$/;

  // Password regex
  const passRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;

  // Username validation
  if (!userRegex.test(username.value)) {
    userError.style.display = "block";
    isValid = false;
  } else {
    userError.style.display = "none";
  }

  // Password validation
  if (!passRegex.test(password.value)) {
    passError.style.display = "block";
    isValid = false;
  } else {
    passError.style.display = "none";
  }

  // Success
  if (isValid) {
    alert("Login Successful 🚀");
  }
});