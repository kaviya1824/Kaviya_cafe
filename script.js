document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting the default way

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }

    // Simulating a login process (Replace this with real authentication logic)
    console.log("Logging in with:", { email, password });

    // ✅ Redirect to the HOME page after login
    window.location.href = "home.html";
  });
});
