let toggle = document.querySelectorAll(".toggle");

function toggleForm() {
  var loginContainer = document.getElementById('login-container');
  var registerContainer = document.getElementById('register-container');

  if (loginContainer.style.display === "none") {
    loginContainer.style.display = "block";
    registerContainer.style.display = "none";
  } else {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
  }
}

toggle.forEach(toggle => toggle.addEventListener('click', () => toggleForm()));
